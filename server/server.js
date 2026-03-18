// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const todoRoutes = require('./routes/todoRoutes');

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Allow requests from React frontend
app.use(express.json()); // Parse JSON request bodies

// Define the port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Todo API is running!' });
});

// Use todo routes
app.use('/api/todos', todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});