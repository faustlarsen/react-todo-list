import React from "react";

function Todo({ todo, toggleComplete }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  return (
    <div style={{ display: "flex"}}> 
    {/* //alligh elements next to each other horizontally */}
    <input type='checkbox' onClick={handleCheckboxClick} />
      <li
        style={{
          color: 'white', 
          textDecoration: todo.completed ? 'line-through' : null
        }}
      >
        {todo.task}
      </li>
      <button>X</button>
    </div>
  );
}

export default Todo;