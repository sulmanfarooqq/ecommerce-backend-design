const Product = require("../models/Product"); // Import the Product model to discover featured products

const getHomePage = async (req, res, next) => { // Define an asynchronous function to render the home page
  try { // Try to fetch featured products from the database
    const featuredProducts = await Product.find({ featured: true }).limit(4); // Find up to 4 products marked as "featured"
    res.render("pages/home", { // Render the home page EJS template
      products: featuredProducts, // Pass the featured products to the template
      title: "Welcome to Our Ecommerce Store" // Set the page title
    }); // End of res.render call
  } catch (error) { // Catch any errors that occur during data fetching
    next(error); // Pass the error to the global error handler
  } // End of catch block
}; // End of getHomePage function definition

const getLoginPage = (req, res) => { // Define a function to render the login form
  res.render("pages/login", { title: "Login" }); // Render the login page with the appropriate title
}; // End of getLoginPage function definition

const getSignupPage = (req, res) => { // Define a function to render the signup form
  res.render("pages/signup", { title: "Signup" }); // Render the signup page with the appropriate title
}; // End of getSignupPage function definition

const getCartPage = (req, res) => { // Define a function to render the cart UI page
  res.render("pages/cart", { title: "Your Shopping Cart" }); // Render the cart page with the appropriate title
}; // End of getCartPage function definition

module.exports = { getHomePage, getLoginPage, getSignupPage, getCartPage }; // Export the page controller functions including the cart

/*
SUMMARY:
- This file handles rendering basic pages like the Home, Login, and Signup pages.
- It fetches initial data, such as featured products, to display on the homepage.
- It simplifies route management by separating the view-rendering logic from the route definitions.
*/
