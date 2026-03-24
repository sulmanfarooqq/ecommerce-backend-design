const mongoose = require("mongoose"); // Import the mongoose library to interact with MongoDB
// This is a blank line for readability
const connectDB = async () => { // Define an asynchronous function to connect to the database
  try { // Try to execute the following code block
    const conn = await mongoose.connect(process.env.MONGO_URI); // Connect to MongoDB using the URI from environment variables
    console.log(`MongoDB Connected: ${conn.connection.host}`); // Log a success message with the database host name
  } catch (error) { // Catch any errors that occur during the connection attempt
    console.error(`Error: ${error.message}`); // Log the error message to the console
    process.exit(1); // Exit the process with a failure code of 1
  } // End of the catch block
}; // End of the connectDB function definition
// This is a blank line for readability
module.exports = connectDB; // Export the connectDB function for use in other files
// This is a blank line for readability
/*
SUMMARY:
- This file handles the connection to the MongoDB database using Mongoose.
- It exports a function that is called when the server starts to establish the database connection.
*/
