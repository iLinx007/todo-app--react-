import React from 'react'; // Importing React library
import { useState } from 'react'; // Importing useState hook from React
import TodoForm from './TodoForm'; // Importing TodoForm component
import Todo from './Todo'; // Importing Todo component

// Definition of TodoList component
function TodoList() {
    // State for managing todo list
    const [todos, setTodos] = useState([]);

    // Function to add a new todo
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        // Adding new todo to the beginning of the todos array
        const newTodos = [todo, ...todos];
        // Updating todos state with new todos array
        setTodos(newTodos);
    };

    // Function to remove a todo
    const removeTodo = id => {
        // Filtering out the todo with the specified id
        const removeArr = [...todos].filter(todo => todo.id !== id);
        // Updating todos state with filtered todos array
        setTodos(removeArr);
    };

    // Function to mark a todo as complete or incomplete
    const completeTodo = id => {
        // Mapping over todos array to find and update the todo with the specified id
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                // Toggling the 'isComplete' property of the todo
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        // Updating todos state with updated todos array
        setTodos(updatedTodos);
    };

    // Rendering TodoList component
    return (
        <div>
            <h1>What's up today?</h1>
            {/* Rendering TodoForm component and passing addTodo function as prop */}
            <TodoForm onSubmit={addTodo} />
            {/* Rendering Todo component and passing todos, completeTodo, and removeTodo functions as props */}
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        </div>
    );
}

// Exporting TodoList component as default
export default TodoList;
