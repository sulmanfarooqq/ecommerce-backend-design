const express = require("express"); // Import the express framework for the server
const path = require("path"); // Import the path module to work with file and directory paths
const dotenv = require("dotenv"); // Import the dotenv library to load environment variables
const cookieParser = require("cookie-parser"); // Import the cookie-parser middleware for handling cookies
const setLocals = require("./middleware/localsMiddleware"); // Import the middleware to set template variables
const { errorHandler, notFound } = require("./middleware/errorMiddleware"); // Import the error handling middleware
// This is a blank line for readability
// Route files
const pageRoutes = require("./routes/web/pageRoutes"); // Import the main page route definitions
const authRoutes = require("./routes/web/authRoutes"); // Import the authentication route definitions
const productRoutes = require("./routes/web/productRoutes"); // Import the product catalog route definitions
const adminRoutes = require("./routes/web/adminRoutes"); // Import the administrative route definitions
// This is a blank line for readability
dotenv.config(); // Load environment variables from the .env file
// This is a blank line for readability
const app = express(); // Initialize the Express application
// This is a blank line for readability
app.set("view engine", "ejs"); // Set EJS as the template engine for the application
app.set("views", path.join(__dirname, "views")); // Set the directory where the view templates are located
// This is a blank line for readability
app.use(express.json()); // Add middleware to parse JSON bodies from requests
app.use(express.urlencoded({ extended: false })); // Add middleware to parse URL-encoded bodies from forms
app.use(cookieParser()); // Add middleware to handle cookies in requests
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the public folder
// This is a blank line for readability
app.use(setLocals); // Use the locals middleware to pass user data to all views
// This is a blank line for readability
// Mount routes
app.use("/", pageRoutes); // Mount the main page routes at the root URL
app.use("/auth", authRoutes); // Mount the authentication routes at the /auth prefix
app.use("/products", productRoutes); // Mount the product catalog routes at the /products prefix
app.use("/admin", adminRoutes); // Mount the administrative routes at the /admin prefix
// This is a blank line for readability
// Error handling middleware
app.use(notFound); // Handle requests for routes that do not exist
app.use(errorHandler); // Catch all errors and render a user-friendly error page
// This is a blank line for readability
module.exports = app; // Export the app instance for use in the server file
// This is a blank line for readability
/*
SUMMARY:
- This file initializes the Express application and sets up the configuration.
- It includes middleware for parsing requests, handling cookies, and serving static files.
- It sets EJS as the template engine and will later include all the application's routes.
*/
