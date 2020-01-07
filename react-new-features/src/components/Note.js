import React, { useContext, useState, useEffect } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  const removeNote = (title) => {
    dispatch({
      type: 'REMOVE_NOTE',
      title: title,
    });
  };

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{position.x}</p>
      <p>{position.y}</p>
      <button onClick={() => removeNote(note.title)}>&times;</button>
    </div>
  )
};

export default Note;