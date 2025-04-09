const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Define routes
app.use('/api/users', userRoutes);

module.exports = app;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});