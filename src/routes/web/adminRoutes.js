const express = require("express"); // Import the express framework to create the router
const router = express.Router(); // Initialize a new router instance
const { getAddProductPage, addProduct } = require("../../controllers/adminController"); // Import admin-specific controllers
const { protect, authorize } = require("../../middleware/authMiddleware"); // Import protection and authorization middleware

router.use(protect); // Ensure all admin routes are protected and require a login
router.use(authorize("admin")); // Ensure only users with the "admin" role can access these routes

router.get("/add-product", getAddProductPage); // Define a route to display the form for adding a new product
router.post("/add-product", addProduct); // Define a route to save the new product details to the database

module.exports = router; // Export the router for use in the main application file

/*
SUMMARY:
- This file defines restricted routes that only administrators can access.
- it applies middleware to check if the user is authenticated and has the correct permissions.
- It manages the flow for adding new products to the system through a secure form.
*/
