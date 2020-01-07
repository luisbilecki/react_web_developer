import React, { useState, useEffect } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const myNotes = localStorage.getItem('notes');

    setNotes(myNotes ? JSON.parse(myNotes) : []);
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  const addNote = (e) => {
    e.preventDefault();

    setNotes([
      ...notes,
      { title, body }
    ]);
    setTitle('');
    setBody('');
  };

  const removeNote = (idToRemove) => {
    const newNotes = notes.filter((_, index) => index !== idToRemove);
    
    setNotes(newNotes);
  };

  return (
    <div>
      <h1>Notes</h1>

      {
        notes.map((note, idx) => (
            <div key={idx}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <button onClick={() => removeNote(idx)}>&times;</button>
            </div>
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

export default Notes;