import React, { useState } from "react";

export default function Todo() {
  // add new task on click submit
  // input field cleared on submit
  // delete remove the task
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddTask() {
    setTodos([...todos, inputValue]);
  }

  function handleDeleteTask(idx) {
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  }

  return <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          onChange={handleInputChange}
        />
        <div>
          <button onClick={handleAddTask}>Submit</button>
        </div>
      </div>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <span>{todo}</span>
            <button onClick={() => handleDeleteTask(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
}
