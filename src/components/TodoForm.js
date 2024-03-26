import React from 'react'; // Importing React library
import { useState, useEffect, useRef } from 'react'; // Importing useState, useEffect, useRef hooks from React

// Definition of TodoForm component
function Todoform(props) {
    // State for input value
    const [input, setInput] = useState('');
    
    // Ref for input element
    const inputRef = useRef(null);
    
    // Effect to focus input field when component mounts
    useEffect(() => {
        inputRef.current.focus();
    });
    
    // Function to handle input change
    const handleChange = e => {
        setInput(e.target.value);
    };

    // Function to handle add button click
    const handleAddclick = e => {
        e.preventDefault();

        // Calling onSubmit function passed as prop with new todo object
        props.onSubmit({
            id: Math.floor(Math.random() * 1000), // Generating random id
            text: input // Setting text from input value
        });

        setInput(''); // Resetting input value
    };

    // Rendering TodoForm component
    return (
        <form className='todo-form' onSubmit={handleAddclick}>
            {/* Input field for adding todo */}
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef} // Referencing input element
            />
            {/* Button to add todo */}
            <button className='todo-button'>Add todo</button>
        </form>
    );
}

// Exporting TodoForm component as default
export default Todoform;
