import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  return (
    notes.map((note, idx) => (
      <Note key={idx} idx={idx} note={note} />
    ))
  );
}

export default NoteList;