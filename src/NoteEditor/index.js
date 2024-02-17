import { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';

const NoteEditor = ({onSave, noteToEdit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    // Effect hook to edit the note

    useEffect(() => {
        if (noteToEdit) {
            setTitle(noteToEdit.title);
            setContent(noteToEdit.content);
            setTags(noteToEdit.tags.join(', '));
        }else{
            setTitle('');
            setContent('');
            setTags('');
        }
       
    }, [noteToEdit])

    // Function to save the note
    const handleSubmit = (e) => {
        e.preventDefault ();
        const tagsArray = typeof tags === 'string' ? tags.split(',').map(tag => tag.trim()) : [];
        const noteId = noteToEdit ? noteToEdit.id : uuidv4();
        const note = {
            id: noteId,
            title,
            content,
            tags: tagsArray,
            createdAt: noteToEdit ? noteToEdit.createdAt : new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }
        
        onSave(note);
        setTitle('');
        setContent('');
        setTags('');
    }
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label> 
                    <textarea
                        className="form-control"
                        id="content"
                        rows="3"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    >
                    </textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>

        )
}

export default NoteEditor;