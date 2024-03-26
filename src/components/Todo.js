import React from 'react';
import Todoform from './TodoForm'; // Importing TodoForm component
import { useState } from 'react'; // Importing useState hook from React
import { RiDeleteBin2Fill } from "react-icons/ri"; // Importing delete icon from react-icons
import { MdOutlineCheckCircle } from "react-icons/md"; // Importing check circle icon from react-icons

// Todo component function definition
function Todo({ todos, completeTodo, removeTodo }) {
  // Rendering todos array using map function
  return todos.map((todo, index) => (
    // Rendering each todo as a div with conditional class based on completion status
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      {/* Rendering todo text */}
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      {/* Rendering delete and complete icons */}
      <div className='icons'>
        {/* Delete icon */}
        <RiDeleteBin2Fill
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        {/* Complete icon */}
        <MdOutlineCheckCircle
          onClick={() => completeTodo(todo.id)}
          className='complete-icon'
        />
      </div>
    </div>
  ));
}

// Exporting Todo component as default
export default Todo;
