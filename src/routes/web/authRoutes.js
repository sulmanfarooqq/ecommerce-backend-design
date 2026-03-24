const express = require("express"); // Import the express framework to create the router
const router = express.Router(); // Initialize a new router instance
const { signup, login, logout } = require("../../controllers/authController"); // Import authentication logic controllers

router.post("/signup", signup); // Define a POST route to handle user registration data
router.post("/login", login); // Define a POST route to handle user login data
router.post("/logout", logout); // Define a POST route to handle user logout and clear sessions

module.exports = router; // Export the router for use in the main application file

/*
SUMMARY:
- This file defines the routes for all user authentication actions.
- It handles the form submissions for signing up and logging in.
- It also provides a way for users to log out and end their secure session.
*/
