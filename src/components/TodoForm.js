import React, { useState } from 'react';
import uuid from 'uuid';

function TodoForm() {
  const [todo, setTodo] = useState({
  id: "",
  task: "",   
  completed: false  
});

function handletaskInputChange(event) {  //updates task property on todo object
  setTodo({...todo, task: event.targer.value})
}

function handleSubmit(event) {
  event.preventDefault();
  if (todo.task.trim()) {
    addTodo({ ...todo, id: uuid.v4() })
  }
}

   return (
    <form>
      <input
      name='task'
      type='text'
      value={todo.task}
      onChange={handletaskInputChange} />  
      <button type='submit' />
    </form>
  )
}

export default TodoForm;