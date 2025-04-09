const jwt = require('jsonwebtoken');

// Middleware for authenticating users using JWT
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']; // Get token from authorization header
    if (!token) {
        return res.status(403).send('No token provided.'); // Respond if no token
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // Verify the token
        if (err) {
            return res.status(500).send('Failed to authenticate token.'); // Respond if verification fails
        }
        req.userId = decoded.id; // Save user ID from token to request
        next(); // Proceed to the next middleware
    });
};

module.exports = authMiddleware;