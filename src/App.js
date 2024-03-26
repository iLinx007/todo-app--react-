import React from 'react'; // Importing React library
import TodoList from './components/TodoList'; // Importing TodoList component
import './App.css'; // Importing CSS file for styling

// Definition of App component
function App() {
  // Rendering App component with TodoList component
  return (
    <div className="to-do-app">
      <TodoList /> {/* Rendering TodoList component */}
    </div>
  );
}

// Exporting App component as default
export default App;
