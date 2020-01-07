import React, { useState, useEffect, useReducer } from 'react';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [
        ...state,
        { title: action.title, body: action.body }
      ];
    case 'REMOVE_NOTE':
      return state.filter(note => note.title !== action.title);
    default:
      return state;
  }
};

const Notes = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title: title,
    });
  };

  return (
    <div>
      <h1>Notes</h1>

      {
        notes.map((note, idx) => (
            <Note key={idx} idx={idx} note={note} removeNote={removeNote} />
        ))
      }

      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Add note</button>
      </form>
    </div>
  )
};

const Note = ({ idx, note, removeNote }) => {
  useEffect(() => {
    console.log('Setting up effect!');

    // ComponentDidUnmount
    return () => {
      console.log('Cleaning up effect!');
    }
  }, [note]);

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>&times;</button>
    </div>
  )
}

export default Notes;