import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div style={styles.todoItem}>
      <div style={styles.todoContent}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id)}
          style={styles.checkbox}
        />
        <span style={todo.completed ? styles.completedText : styles.text}>
          {todo.title}
        </span>
      </div>
      <button onClick={() => onDelete(todo._id)} style={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
}

const styles = {
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    marginBottom: '10px',
    border: '1px solid #e0e0e0',
  },
  todoContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
  },
  text: {
    fontSize: '16px',
    color: '#333',
  },
  completedText: {
    fontSize: '16px',
    color: '#999',
    textDecoration: 'line-through',
  },
  deleteButton: {
    padding: '6px 12px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default TodoItem;
