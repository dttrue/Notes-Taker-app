import React from 'react';
import Header from '../../Header';
import NoteEditor from '../../NoteEditor';

function Home({ onSearch, onSave, onEditingNote }) {
  return (
    <div>
      <Header onSearch={onSearch} />
     

      <NoteEditor onSave={onSave} onEditingNote={onEditingNote} />


    </div>
  );
}

export default Home;