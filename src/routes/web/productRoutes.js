const express = require("express"); // Import the express framework to create the router
const router = express.Router(); // Initialize a new router instance
const { getProducts, getProductDetail } = require("../../controllers/productController"); // Import product-related controllers

router.get("/", getProducts); // Define a route to list all products with filtering and pagination
router.get("/:id", getProductDetail); // Define a route to show the details of a single product using its ID

module.exports = router; // Export the router for use in the main application file

/*
SUMMARY:
- This file manages all product-related URLs on the public-facing website.
- It connects requests for the product directory and individual product pages to their controllers.
- This structure supports dynamic data fetching and user interaction for browsing the catalog.
*/
