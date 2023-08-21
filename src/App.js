import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const [addingNote, setAddingNote] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    title: "",
    description: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const onTitleChange = (event) => {
    setCurrentNote({
      ...currentNote,
      title: event.target.value,
    });
  };

  const onDescriptionChange = (event) => {
    setCurrentNote({
      ...currentNote,
      description: event.target.value,
    });
  };

  const onCreateNote = () => {
    if (currentNote.title && currentNote.description) {
      if (editingIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editingIndex] = currentNote;
        setNotes(updatedNotes);
        setCurrentNote({ title: "", description: "" });
        setEditingIndex(null);
      } else {
        setNotes([...notes, currentNote]);
        setCurrentNote({ title: "", description: "" });
      }
      setAddingNote(false);
    }
  };

  const onCancelNote = () => {
    setCurrentNote({ title: "", description: "" });
    setAddingNote(false);
    setEditingIndex(null);
  };

  const editNote = (index) => {
    setEditingIndex(index);
    setCurrentNote({ ...notes[index] }); // Copy the note to edit
    setAddingNote(true);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Header />
      {addingNote ? (
        <NoteForm
          editingIndex={editingIndex}
          currentNote={currentNote}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
          onCreateNote={onCreateNote}
          onCancelNote={onCancelNote}
        />
      ) : (
        <NoteList
          notes={notes}
          editNote={editNote}
          deleteNote={deleteNote}
          setAddingNote={setAddingNote}
          setNotes={setNotes} 
        />
      )}
    </div>
  );
}

export default App;
