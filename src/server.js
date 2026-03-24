const app = require("./app"); // Import the Express application from the app file
const connectDB = require("./config/db"); // Import the database connection function from the config folder
const dotenv = require("dotenv"); // Import the dotenv library to load environment variables
dotenv.config(); // Load environment variables from the .env file at the very beginning
// This is a blank line for readability
const startServer = async () => { // Define an asynchronous function to start the server
  await connectDB(); // Wait for the database connection to be established before proceeding
// This is a blank line for readability
  const PORT = process.env.PORT || 3000; // Determine the port number from environment variables or use 3000 as default
// This is a blank line for readability
  app.listen(PORT, () => { // Start the server and listen for incoming requests on the specified port
    console.log(`Server running on port ${PORT}`); // Log a message to the console indicating the server is active
  }); // End of the server listen function
}; // End of startServer function definition
// This is a blank line for readability
startServer(); // Call the startServer function to kick off the application process
// This is a blank line for readability
/*
SUMMARY:
- This is the main entry point to start the backend server.
- It connects to the database first and then starts the Express application.
- It listens on the specified port for all incoming traffic.
*/
