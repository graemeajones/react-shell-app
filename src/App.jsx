import { useState, useRef, useEffect } from 'react';
import './App.scss';

function App() {
  // State
  const [todos, setTodos] = useState([]);

  // Lifecycle
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    setTodos(storedTodos ? JSON.parse(storedTodos) : []);
  }, []);

  // Bindings
  const newTodo = useRef();

  // Events
  const handleAdd = () => {
    const extendedTodos = [...todos, newTodo.current.value];
    setTodos(extendedTodos); // set is async i.e. old state will persist for a while
    localStorage.setItem('todos', JSON.stringify(extendedTodos));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
      <div>
        <input type="text" ref={newTodo}></input>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default App;
