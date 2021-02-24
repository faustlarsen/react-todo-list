import React, { useEffect, useState } from 'react;'
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";


function App() {
   // adds new todo to beginning of todos array
 const [todos, setTodos] = useState([]);
  
 function addTodo(todo) {
   setTodos([todo, ...todos]);
 }

 useEffect(() => {
  // fires when todos array gets updated
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}, [todos]);

  return (
    <div className="App">
      <header className="App-header">
      <p>React ToDo</p>
      <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;


// useeffect(() => {
//   //effect
//   return () => {
//     //clean up
//   }
// }, [dependecyArray]);
// 1. it takes 2 parameters - function which is a useEffect, 
// and dependecyArray
// 2. dependecyArray is a parameter that gets used to determine
// is the effects is fired off or not.
// 3.  if 1 or more of the variables in the dependecyArray changes,
// the effect will be fired.
// 4. if dependencyArray is empty - then the effect will be fired when 
// the Component is initially rendered
