const fs = require("fs"); // Import the file system module to read local files
const mongoose = require("mongoose"); // Import mongoose to interact with the database
const dotenv = require("dotenv"); // Import dotenv to load environment variables
const path = require("path"); // Import the path module to manage file locations

dotenv.config({ path: path.join(__dirname, "../.env") }); // Load environment variables from the project root .env file

const Product = require("../src/models/Product"); // Import the Product model to insert data into the collection

const products = JSON.parse( // Parse the sample products JSON file into a JavaScript array
  fs.readFileSync(path.join(__dirname, "products.json"), "utf-8") // Read the products.json file content as a string
); // End of JSON.parse call

const importData = async () => { // Define an asynchronous function to import data into MongoDB
  try { // Try to establish a database connection and save the products
    await mongoose.connect(process.env.MONGO_URI); // Connect to the database using the URI from environment variables
    
    await Product.deleteMany(); // Clear all existing products from the collection to start fresh
    console.log("Existing data removed..."); // Log that old products have been cleaned up
    
    await Product.insertMany(products); // Bulk insert the sample products into the database
    console.log("Sample data imported successfully!"); // Log a success message for the data import
    
    process.exit(); // Exit the process once the import is complete
  } catch (error) { // Catch any errors that occur during the database operation
    console.error(`Error: ${error.message}`); // Log the error message to the console for debugging
    process.exit(1); // Exit the process with a failure code
  } // End of catch block
}; // End of importData function definition

importData(); // Call the importData function to execute the seed process

/*
SUMMARY:
- This script provides an easy way to populate the database with initial sample products.
- It reads data from `products.json`, connects to MongoDB, and performs a bulk insertion.
- It is useful for quickly setting up a development environment with realistic product data.
*/
