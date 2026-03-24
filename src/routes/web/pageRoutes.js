const express = require("express"); // Import the express framework to create the router
const router = express.Router(); // Initialize a new router instance
const { getHomePage, getLoginPage, getSignupPage, getCartPage } = require("../../controllers/pageController"); // Import specialized page controllers

router.get("/", getHomePage); // Define the route for the home page and use the home page controller
router.get("/login", getLoginPage); // Define the route to display the login page
router.get("/signup", getSignupPage); // Define the route to display the signup page
router.get("/cart", getCartPage); // Define the route to display the cart page UI

module.exports = router; // Export the router for use in the main application file

/*
SUMMARY:
- This file handles the routing for simple pages like the home page and authentication forms.
- It maps URLs to the correct functions in the page controller.
- This separation helps keep the main `app.js` file organized and manageable.
*/
