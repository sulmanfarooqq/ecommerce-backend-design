const User = require("../models/User"); // Import the User model to interact with the database
const bcrypt = require("bcryptjs"); // Import bcryptjs for comparing hashed passwords
const { generateToken } = require("../utils/jwt"); // Import the function to generate security tokens

const signup = async (req, res, next) => { // Define an asynchronous function for user registration
  try { // Try to execute the user creation process
    const { name, email, password } = req.body; // Extract user data from the request body
    const user = await User.create({ name, email, password }); // Create a new user in the database
    const token = generateToken(user._id); // Generate a new security token for the user
    
    res.cookie("token", token, { // Set a cookie with the token in the response
      httpOnly: true, // Prevent the cookie from being accessed by client-side browser scripts
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000) // Set the cookie expiration date
    }); // End of res.cookie call

    res.redirect("/"); // Redirect the newly registered user to the home page
  } catch (error) { // Catch any errors that occur during signup
    res.status(400).render("pages/signup", { // Render the signup page again with an error message
      error: error.message // Provide the error message to the view
    }); // End of res.status.render call
  } // End of catch block
}; // End of signup function definition

const login = async (req, res, next) => { // Define an asynchronous function for user login
  try { // Try to execute the user authentication process
    const { email, password } = req.body; // Extract login credentials from the request body
    const user = await User.findOne({ email }).select("+password"); // Fetch the user from the database including the password field
    
    if (!user || !(await bcrypt.compare(password, user.password))) { // Check if the user exists and the password matches
      return res.status(401).render("pages/login", { // Render the login page if authentication fails
        error: "Invalid email or password" // Set an error message for the user
      }); // End of res.status.render call
    } // End of if condition

    const token = generateToken(user._id); // Generate a security token for the authenticated user

    res.cookie("token", token, { // Set a secure cookie with the user's token
      httpOnly: true, // Protect the cookie from cross-site scripting attacks
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000) // Set the cookie expiration date
    }); // End of res.cookie call

    res.redirect("/"); // Redirect the successfully logged-in user to the home page
  } catch (error) { // Catch any errors that occur during login
    res.status(400).render("pages/login", { // Render the login page again with an error message
      error: error.message // Provide the error message to the view
    }); // End of res.status.render call
  } // End of catch block
}; // End of login function definition

const logout = (req, res) => { // Define a function for logging out the user
  res.cookie("token", "none", { // Clear the authentication token by setting it to "none"
    expires: new Date(Date.now() + 10 * 1000), // Set the cookie to expire in 10 seconds
    httpOnly: true // Maintain security while clearing the cookie
  }); // End of res.cookie call
  res.redirect("/login"); // Redirect the user back to the login page
}; // End of logout function definition

module.exports = { signup, login, logout }; // Export the authentication controller functions

/*
SUMMARY:
- This file manages user authentication logic, including signing up, logging in, and logging out.
- It handles password verification using bcrypt and manages user sessions with secure cookies and JWT tokens.
- It redirects the user to appropriate pages upon success or renders form pages with error messages upon failure.
*/
