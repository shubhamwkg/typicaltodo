import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/todoService';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Make sure the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (title) => {
    try {
      const newTodo = await createTodo(title);
      setTodos([newTodo, ...todos]); // Add new todo to the top
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo._id === id);
      const updatedTodo = await updateTodo(id, { completed: !todoToUpdate.completed });
      setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Todo App</h1>
        
        {error && <div className="error">{error}</div>}
        
        <AddTodo onAdd={handleAddTodo} />
        
        {loading ? (
          <p>Loading todos...</p>
        ) : todos.length === 0 ? (
          <p className="empty-message">No todos yet. Add one above!</p>
        ) : (
          <div className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;