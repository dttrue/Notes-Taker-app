

const NoteItem = ({note, onEdit, onDelete}) => {

    return (
        <div className="note-item card  mb-3">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
            <div className="mb-2">
                {note.tags.map(tag => (
                    <span className="badge bg-primary me-1" key={tag}>{tag}</span>  
                ))}
            </div>
            <div className="text-muted">
                <small>Created at: {new Date(note.createdAt).toLocaleDateString()}</small>
                <br/>
                <small>Updated at: {new Date(note.updatedAt).toLocaleDateString()}</small>
            </div>

            <div className="mt-3">
                <button className="btn btn-primary me-2" onClick={() => onEdit(note.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(note.id)}>Delete</button>
            </div>
            </div>
        </div>
    )
}

export default NoteItem