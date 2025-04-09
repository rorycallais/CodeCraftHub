const mongoose = require('mongoose');


// Define the user schema for MongoDB
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true // Ensure unique usernames
    },
    password: {
        type: String,
        required: true // Password is required
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure unique email addresses
    }
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const User = mongoose.model('User', userSchema); // Create the User model

module.exports = User;