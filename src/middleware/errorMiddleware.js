const errorHandler = (err, req, res, next) => { // Define a global error handling middleware function
  const statusCode = err.statusCode || 500; // Set the status code to the error's code or default to 500
  const message = err.message || "Something went wrong!"; // Set the error message or default to a generic one

  res.status(statusCode).render("pages/error", { // Render the error page template with context
    message: message, // Provide the error message to the view
    error: process.env.NODE_ENV === "development" ? err : {} // In development, show the full error details
  }); // End of res.status.render call
}; // End of errorHandler function definition

const notFound = (req, res, next) => { // Define a middleware function for handling 404 Not Found errors
  res.status(404).render("pages/not-found", { // Render the 404 page template
    url: req.originalUrl // Provide the requested URL to the view for context
  }); // End of res.status.render call
}; // End of notFound function definition

module.exports = { errorHandler, notFound }; // Export the error handling functions

/*
SUMMARY:
- This file provides global error handling and 404 page management for the application.
- The `errorHandler` function catches any errors passed to `next()` and renders a user-friendly error page.
- The `notFound` middleware handles requests to routes that do not exist.
*/
