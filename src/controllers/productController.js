const Product = require("../models/Product"); // Import the Product model to query product data
const paginate = require("../utils/pagination"); // Import the pagination utility for list views

const getProducts = async (req, res, next) => { // Define an asynchronous function to display the product list
  try { // Try to process the request and fetch products
    const page = parseInt(req.query.page) || 1; // Parse the page number from the query or default to 1
    const limit = parseInt(req.query.limit) || 8; // Parse the items per page limit or default to 8
    const { search, category, brand } = req.query; // Destructure search filters from the query parameters

    const query = {}; // Initialize an empty query object

    if (search) { // If a search term is provided by the user
      query.name = { $regex: search, $options: "i" }; // Add a case-insensitive name filter to the query
    } // End of if condition for search

    if (category) { // If a specific category is requested
      query.category = category; // Add the category filter to the query
    } // End of if condition for category

    if (brand) { // If a specific brand is requested
      query.brand = brand; // Add the brand filter to the query
    } // End of if condition for brand

    const paginatedResult = await paginate(Product, query, page, limit); // Fetch the paginated results and metadata
    const categories = await Product.distinct("category"); // Fetch all unique categories for the filter UI
    const brands = await Product.distinct("brand"); // Fetch all unique brands for the filter UI

    res.render("pages/products", { // Render the products listing page EJS template
      products: paginatedResult.results, // Pass the products for the current page to the view
      pagination: paginatedResult, // Pass the pagination metadata to the view
      categories, // Pass the list of categories for filter checkboxes
      brands, // Pass the list of brands for filter checkboxes
      query: req.query, // Pass the original query back to the view to maintain filter states
      title: "Our Products" // Set the page title
    }); // End of res.render call
  } catch (error) { // Catch any errors that occur during the process
    next(error); // Pass the error to the global error handler
  } // End of catch block
}; // End of getProducts function definition

const getProductDetail = async (req, res, next) => { // Define an asynchronous function to show a single product
  try { // Try to fetch the product by its ID
    const product = await Product.findById(req.params.id); // Search for the product in the database using the ID from the URL
    if (!product) { // If the product is not found in the database
      return res.status(404).render("pages/not-found", { url: req.originalUrl }); // Render the 404 page
    } // End of if condition for nonexistent product
    res.render("pages/product-details", { // Render the product details EJS template
      product, // Pass the product data to the template
      title: product.name // Set the page title to the product name
    }); // End of res.render call
  } catch (error) { // Catch any errors that occur during fetching
    next(error); // Pass the error to the global error handler
  } // End of catch block
}; // End of getProductDetail function definition

module.exports = { getProducts, getProductDetail }; // Export the product controller functions

/*
SUMMARY:
- This file handles product listing, searching, filtering, and detail views.
- It uses the pagination utility to manage large sets of products efficiently on the server side.
- It gathers additional metadata like unique categories and brands to build dynamic filter menus in the UI.
*/
