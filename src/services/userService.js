const User = require('../models/userModel');

// Service to create a new user
const createUser = async (userData) => {
    const user = new User(userData); // Create a new User instance
    return await user.save(); // Save to the database
};

// Service to authenticate a user
const authenticateUser = async (credentials) => {
    const user = await User.findOne({ username: credentials.username }); // Find user by username
    if (!user || user.password !== credentials.password) { // Check if user exists and password matches
        throw new Error('Invalid credentials'); // Throw error if authentication fails
    }
    return user; // Return authenticated user
};

module.exports = { createUser, authenticateUser };