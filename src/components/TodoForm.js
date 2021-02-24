import React, { useState } from 'react';

function TodoForm() {
  const [todo, setTodo] = useState({
  id: "",
  task: "",   
  completed: false  
});

function handletaskInputChange(event) {  //updates task property on todo object
  setTodo({...todo, task: event.targer.value})
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