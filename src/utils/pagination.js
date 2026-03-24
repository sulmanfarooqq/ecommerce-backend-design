const paginate = async (model, query, page, limit) => { // Define an asynchronous function for paginating database queries
  const skip = (page - 1) * limit; // Calculate how many items to skip based on the current page and limit
  const total = await model.countDocuments(query); // Count the total number of documents that match the query
  const totalPages = Math.ceil(total / limit); // Calculate the total number of pages needed
  
  const results = await model.find(query) // Execute the query to find documents
    .skip(skip) // Skip the calculated number of items for pagination
    .limit(limit) // Limit the number of results returned per page
    .sort({ createdAt: -1 }); // Sort the results by creation date in descending order

  return { // Return an object containing the paginated results and metadata
    results, // The list of products for the current page
    currentPage: page, // The current page number
    totalPages, // The total number of pages available
    totalCount: total // The total number of items found
  }; // End of return object definition
}; // End of paginate function definition

module.exports = paginate; // Export the paginate function for use in controllers

/*
SUMMARY:
- This utility function handles server-side pagination for any Mongoose model.
- It calculates the skip value, counts total documents, and fetches the requested subset of data.
- It returns both the results and pagination metadata to help the frontend display navigation links.
*/
