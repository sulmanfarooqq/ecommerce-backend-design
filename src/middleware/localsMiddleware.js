const jwt = require("jsonwebtoken"); // Import the jsonwebtoken library to verify tokens
const User = require("../models/User"); // Import the User model to fetch current user data

const setLocals = async (req, res, next) => { // Define a middleware function to set local variables for templates
  res.locals.user = null; // Initialize the user local variable as null

  if (req.cookies.token) { // Check if a token is present in the request's cookies
    try { // Try to verify the token and find the user
      const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET); // Verify the token with the secret key
      const user = await User.findById(decoded.id); // Fetch the user from the database using the decoded ID
      res.locals.user = user; // Attach the user data to the locals object for access in EJS views
    } catch (error) { // Catch any errors that occur during verification
      res.locals.user = null; // Keep the user as null if the token is invalid
    } // End of catch block
  } // End of if condition

  next(); // Move to the next middleware or route handler
}; // End of setLocals function definition

module.exports = setLocals; // Export the setLocals middleware function

/*
SUMMARY:
- This middleware runs on every request to pass the current user's information to the view templates.
- It allows the navbar to conditionally show "Login/Signup" or "Logout/Profile" based on the user's status.
- It ensures that user data is available in all EJS templates without manually passing it in every controller.
*/
