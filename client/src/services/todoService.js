import axios from 'axios';

const API_URL = 'http://localhost:3001/api/todos';

// Get all todos
export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a new todo
export const createTodo = async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

// Update a todo (toggle completed or edit title)
export const updateTodo = async (id, updates) => {
  const response = await axios.put(`${API_URL}/${id}`, updates);
  return response.data;
};

// Delete a todo
export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
