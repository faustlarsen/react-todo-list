import React, { useState } from "react";
import uuid from "uuid";
import { Button, TextField } from "@material-ui/core";

function TodoForm(addTodo) {
  const [todo, setTodo] = useState({
  id: "",
  task: "",   
  completed: false  
});

function handletaskInputChange(event) {   //updates task property on todo object
   // e.target.value contains new input from onChange
    // event for input elements
  setTodo({...todo, task: event.targer.value})
}

function handleSubmit(event) {
  event.preventDefault(); // prevents browser refresh
     // trim() gets rid of string whitespace
  if (todo.task.trim()) {
    addTodo({ ...todo, id: uuid.v4() });
    //reset task input
    setTodo({ ...todo, task: ""});

  }
}

   return (
    <form onSubmit={handleSubmit}>
      <TextField
      name='task'
      type='text'
      value={todo.task}
      onChange={handletaskInputChange} />  
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default TodoForm;