const jwt = require("jsonwebtoken"); // Import the jsonwebtoken library to generate and verify tokens

const generateToken = (id) => { // Define a function to generate a JWT for a given user ID
  return jwt.sign({ id }, process.env.JWT_SECRET, { // Sign the token with the user ID and the secret key
    expiresIn: process.env.JWT_EXPIRE // Set the token expiration time based on environment variables
  }); // End of jwt.sign call
}; // End of generateToken function definition

const verifyToken = (token) => { // Define a function to verify a JWT provided by the user
  return jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret key and return the payload
}; // End of verifyToken function definition

module.exports = { generateToken, verifyToken }; // Export the functions for use in other files

/*
SUMMARY:
- This file provides utility functions for working with JSON Web Tokens (JWT).
- The `generateToken` function creates a new token for a user after they log in.
- The `verifyToken` function checks if a token provided in a request is valid.
*/
