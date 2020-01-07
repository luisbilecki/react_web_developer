import React from 'react';
import Note from './Note';

const NoteList = ({ notes, removeNote }) => 
  notes.map((note, idx) => (
    <Note key={idx} idx={idx} note={note} removeNote={removeNote} />
  ));

export default NoteList;