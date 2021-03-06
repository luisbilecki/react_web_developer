import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_NOTE',
      title: title,
      body: body,
    });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Add note</button>
      </form>
    </>
  );
}

export default AddNoteForm;