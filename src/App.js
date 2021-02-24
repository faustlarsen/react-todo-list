import React, { useEffect, useState } from 'react;'
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";


function App() {
   // adds new todo to beginning of todos array
 const [todos, setTodos] = useState([]);

 useEffect(() => {
  // fires when app component mounts to the DOM
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (storageTodos) {
    setTodos(storageTodos);
  }
}, []);

 useEffect(() => {
  // fires when todos array gets updated
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}, [todos]);
  
 function addTodo(todo) {
   setTodos([todo, ...todos]);
 }

 function toggleComplete(id) {
  setTodos(
    todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  );
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id));
}

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React ToDo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
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
