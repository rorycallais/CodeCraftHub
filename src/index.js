const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
connectDB();

// Use user routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000; // Set port from environment variable or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log server start message
});