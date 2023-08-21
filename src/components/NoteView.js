const NoteView = ({ note }) => {
    return (
      <div className="note-view">
        <h2>{note.title}</h2>
        <p>{note.description}</p>
      </div>
    );
  };
  
  export default NoteView;
  