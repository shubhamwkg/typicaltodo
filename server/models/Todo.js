const mongoose = require('mongoose');

// Define the Todo schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// Create and export the model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;