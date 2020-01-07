import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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

// { count: 0, name: '' }
// const App = (props) => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState('');
  
//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>reset</button>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   )
// };

// App.defaultProps = {
//   count: 0,
// }

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
