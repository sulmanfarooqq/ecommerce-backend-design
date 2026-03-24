document.addEventListener("DOMContentLoaded", () => { // Wait for the entire HTML document to be fully loaded before running scripts
  console.log("Ecommerce application initialized!"); // Log a message to the console for debugging purposes

  // Mobile Menu Toggle (Simplified for demo)
  const logo = document.querySelector(".nav-logo"); // Select the store logo element from the DOM
  logo.addEventListener("click", () => { // Add a click event listener to the logo element
    console.log("Logo clicked - home page link activated"); // Log when the logo is used as a navigation link
  }); // End of logo click event listener

  // Confirmation for Delete Actions (if any are added)
  const buttons = document.querySelectorAll(".btn-danger"); // Find all elements with the red danger button class
  buttons.forEach(button => { // Loop through each detected danger button
    button.addEventListener("click", (e) => { // Add a click listener to prompt for confirmation
      if (!confirm("Are you sure you want to perform this action?")) { // Show a browser confirmation dialog
        e.preventDefault(); // Stop the default action (like form submission) if the user cancels
      } // End of confirmation check
    }); // End of button click event listener
  }); // End of danger buttons loop
}); // End of DOMContentLoaded event listener

/*
SUMMARY:
- This file contains the main client-side JavaScript for the ecommerce application.
- It handles simple interactivity such as logging initialization and providing action confirmations.
- It ensures that scripts only run after the page elements are safely loaded in the browser.
*/
