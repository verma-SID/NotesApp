import "../App.css";

const NoteForm = ({
  editingIndex,
  currentNote,
  onTitleChange,
  onDescriptionChange,
  onCreateNote,
  onCancelNote,
}) => {
  return (
    <div className="note-form">
      <h2>{editingIndex !== null ? "Edit Note" : "Add New Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={currentNote.title}
        onChange={onTitleChange}
      />
      <textarea
        placeholder="Description"
        value={currentNote.description}
        onChange={onDescriptionChange}
      />
      <button className="add-button" onClick={onCreateNote}>
        {editingIndex !== null ? "Save Changes" : "Add Note"}
      </button>
      <button className="cancel-button" onClick={onCancelNote}>
        Cancel
      </button>
    </div>
  );
};
export default NoteForm;
