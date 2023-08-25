import "../App.css";

const NoteView = ({ selectedNote, closeNoteView }) => {
  return (
    <div className="note-viewer">
      {selectedNote ? (
        <div className="note-content">
          <h2>{selectedNote.title}</h2>
          <p>{selectedNote.description}</p>
          <button onClick={closeNoteView} className="close-button">
            Close
          </button>
        </div>
      ) : (
        <p>No note selected.</p>
      )}
    </div>
  );
};

export default NoteView;
