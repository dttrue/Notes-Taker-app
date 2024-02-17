import NoteList from "../../NoteList";


const NotesListPage = ({notes, onEdit, onDelete}) => {

    return (
        <NoteList notes={notes} onEdit={onEdit} onDelete={onDelete} />
    )
    
}

export default NotesListPage