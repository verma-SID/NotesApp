import "../App.css"


const NoteList = ({ notes, editNote, deleteNote, setAddingNote, setNotes }) => {
  return (
    <div className="note-list">
      <button className="add-button" onClick={() => setAddingNote(true)}>
        Add Note
      </button>
      <div className="note-list">
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button className="edit-button" onClick={() => editNote(index)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => deleteNote(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
