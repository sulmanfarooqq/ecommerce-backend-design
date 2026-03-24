const Product = require("../models/Product"); // Import the Product model to save new products

const getAddProductPage = (req, res) => { // Define a function to render the add product form page
  res.render("pages/add-product", { title: "Add New Product" }); // Render the add-product template with a title
}; // End of getAddProductPage function definition

const addProduct = async (req, res, next) => { // Define an asynchronous function to handle product creation
  try { // Try to save the new product data from the form body
    const { name, price, category, brand, image, description, stock } = req.body; // Destructure product data from the request body
    const product = await Product.create({ // Create a new product entry in the database
      name, // Save the product name
      price, // Save the product price
      category, // Save the product category
      brand, // Save the product brand
      image, // Save the image URL or filename
      description, // Save the product description
      stock // Save the initial stock level
    }); // End of Product.create call
    res.redirect(`/products/${product._id}`); // Redirect the admin to the newly created product's detail page
  } catch (error) { // Catch any errors that occur during the creation process
    res.status(400).render("pages/add-product", { // Render the add product page again with an error message
      error: error.message, // Provide the error message to the view
      title: "Add New Product" // Maintain the page title
    }); // End of res.status.render call
  } // End of catch block
}; // End of addProduct function definition

module.exports = { getAddProductPage, addProduct }; // Export the admin controller functions

/*
SUMMARY:
- This file manages admin-only operations, specifically the flow for adding new products to the database.
- It provides functionality to render the creation form and handle the form submission logic.
- It ensures that new products are correctly validated and saved before redirecting to the product view.
*/
