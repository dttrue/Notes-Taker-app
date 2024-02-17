import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import NotesListPage from './Pages/NotesList';
import Home from './Pages/Home';
import { v4 as uuidv4 } from 'uuid';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const onSave = (newOrUpdatedNote) => {
    console.log('Saving note:', newOrUpdatedNote);
    if (newOrUpdatedNote.id && notes.some(note => note.id === newOrUpdatedNote.id)) {
     
      setNotes(notes.map(note => note.id === newOrUpdatedNote.id ? newOrUpdatedNote : note));
    } else {
    
      setNotes([...notes, { ...newOrUpdatedNote, id: uuidv4() }]);
    }
  };
  

  const onEdit = (noteId) => {
    const noteToEdit = notes.find(note => note.id === noteId);
    console.log('Editing note with ID:', noteId);
  console.log('Note found for editing:', noteToEdit);
    setEditingNote(noteToEdit);
    
  }

  const onDelete = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };
  
  


  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredNotes = notes.filter(note => 
     note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     note.content.toLowerCase().includes(searchTerm.toLowerCase())

  )




  return (
    <Router>
    <div className="App">

      <nav>
        <Link className='link' to="/">Home</Link>
        <Link  className='link' to="/notes">Notes</Link>
        
      </nav>

      <Routes>
          <Route  path="/" element={<Home onSave={onSave} onSearch={onSearch} editingNote={editingNote} />} />
          <Route path="/notes" element={<NotesListPage notes={filteredNotes} onEdit={onEdit} onDelete={onDelete} />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
