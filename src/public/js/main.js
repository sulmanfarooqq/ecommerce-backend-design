document.addEventListener("DOMContentLoaded", () => {
  console.log("Ecommerce application initialized!");

const logo = document.querySelector(".nav-logo");
  logo.addEventListener("click", () => {
    console.log("Logo clicked - home page link activated");
  });

const buttons = document.querySelectorAll(".btn-danger");
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      if (!confirm("Are you sure you want to perform this action?")) {
        e.preventDefault();
      }
    });
  });
});

/*
SUMMARY:
- This file contains the main client-side JavaScript for the ecommerce application.
- It handles simple interactivity such as logging initialization and providing action confirmations.
- It ensures that scripts only run after the page elements are safely loaded in the browser.
*/

