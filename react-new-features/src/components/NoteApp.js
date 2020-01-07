import React, { useEffect, useReducer } from 'react';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import notesReducer from '../reducers/notes';

const Notes = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const myNotes = localStorage.getItem('notes');

    dispatch({ 
      type: 'POPULATE_NOTES', 
      notes: myNotes ? JSON.parse(myNotes) : []
    });
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title: title,
    });
  };

  return (
    <div>
      <h1>Notes</h1>

      <NoteList notes={notes} removeNote={removeNote} />
      <AddNoteForm dispatch={dispatch} />
    </div>
  )
};


export default Notes;