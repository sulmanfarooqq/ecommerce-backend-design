const mongoose = require("mongoose"); // Import the mongoose library to create the database schema

const productSchema = new mongoose.Schema({ // Define a new schema for the Product collection
  name: { // Define the name field for the product
    type: String, // The name must be a string of text
    required: [true, "Please add a name"], // The name is mandatory
    trim: true, // Remove extra whitespace from the beginning and end
    maxlength: [100, "Name cannot be more than 100 characters"] // The name cannot exceed 100 characters
  }, // End of name field definition
  price: { // Define the price field for the product
    type: Number, // The price must be a number
    required: [true, "Please add a price"], // The price is mandatory
    maxlength: [10, "Price cannot be more than 10 characters"] // Limit the price string length (not really applicable to Number but useful for validation)
  }, // End of price field definition
  category: { // Define the category field for sorting products
    type: String, // The category must be a string of text
    required: [true, "Please select a category"] // The category is mandatory
  }, // End of category field definition
  brand: { // Define the brand field for the product
    type: String, // The brand must be a string of text
    required: [true, "Please add a brand"] // The brand is mandatory
  }, // End of brand field definition
  image: { // Define the image field to store the image URL or filename
    type: String, // The image path is stored as a string
    default: "no-photo.jpg" // Set a default image if none is provided
  }, // End of image field definition
  description: { // Define the description field for the product
    type: String, // The description must be a string of text
    required: [true, "Please add a description"] // The description is mandatory
  }, // End of description field definition
  stock: { // Define the stock field to track product availability
    type: Number, // The stock must be a number
    required: [true, "Please add stock"], // The stock is mandatory
    default: 0 // If not provided, the stock defaults to 0
  }, // End of stock field definition
  rating: { // Define the rating field for the product
    type: Number, // The rating must be a number
    default: 0 // If not provided, the rating defaults to 0
  }, // End of rating field definition
  featured: { // Define the featured field to highlight certain products
    type: Boolean, // The field is a true/false value
    default: false // By default, products are not featured
  }, // End of featured field definition
  createdAt: { // Define the field to track when the product was added
    type: Date, // The date must be a valid date object
    default: Date.now // Set the default value to the current date and time
  } // End of createdAt field definition
}); // End of productSchema definition

module.exports = mongoose.model("Product", productSchema); // Export the Product model based on the schema

/*
SUMMARY:
- This file defines the Product schema for MongoDB using Mongoose.
- It contains fields like name, price, category, brand, image, stock, and rating.
- These fields allow the application to manage and display product information effectively.
*/
