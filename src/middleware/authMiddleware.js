const jwt = require("jsonwebtoken"); // Import the jsonwebtoken library to verify user tokens
const User = require("../models/User"); // Import the User model to fetch user data from the database

const protect = async (req, res, next) => { // Define a middleware function to protect routes from unauthorized access
  let token; // Declare a variable to store the token

  if (req.cookies.token) { // Check if the token is present in the request's cookies
    token = req.cookies.token; // Retrieve the token from the cookie
  } // End of if condition

  if (!token) { // If no token is found in the request
    return res.redirect("/login"); // Redirect the user to the login page
  } // End of if condition

  try { // Try to verify the token and fetch the user
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using the secret key
    req.user = await User.findById(decoded.id); // Fetch the user from the database and attach it to the request object
    next(); // Move to the next middleware or route handler
  } catch (error) { // Catch any errors that occur during verification
    return res.redirect("/login"); // Redirect the user to the login page if the token is invalid
  } // End of catch block
}; // End of protect middleware definition

const authorize = (...roles) => { // Define a middleware function to authorize specific user roles
  return (req, res, next) => { // Return a function that Express can use as middleware
    if (!roles.includes(req.user.role)) { // Check if the current user's role is allowed
      return res.status(403).render("pages/error", { // Render the error page if the role is not authorized
        message: "You are not authorized to access this route", // Set an error message for the user
        error: { status: 403 } // Include the HTTP status code for context
      }); // End of res.status.render call
    } // End of if condition
    next(); // Move to the next middleware or route handler if authorized
  }; // End of middleware function return
}; // End of authorize middleware definition

module.exports = { protect, authorize }; // Export the protection and authorization middleware

/*
SUMMARY:
- This file contains middleware to handle authentication and authorization for routes.
- The `protect` middleware ensures that only logged-in users can reach certain pages.
- The `authorize` middleware checks if a user has the required role (e.g., admin) to access specific functionality.
*/
