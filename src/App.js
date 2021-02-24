import './App.css';
import React, { useState } from 'react;'

function App() {
 const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
      <p>React To Do</p>
      </header>
    </div>
  );
}

export default App;
