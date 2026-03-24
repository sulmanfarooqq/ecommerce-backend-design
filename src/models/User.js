const mongoose = require("mongoose"); // Import the mongoose library to create the database schema
const bcrypt = require("bcryptjs"); // Import bcryptjs for hashing user passwords safely

const userSchema = new mongoose.Schema({ // Define a new schema for the User collection
  name: { // Define the name field for the user
    type: String, // The name must be a string of text
    required: [true, "Please add a name"] // The name is mandatory and shows an error if missing
  }, // End of name field definition
  email: { // Define the email field for the user
    type: String, // The email must be a string of text
    required: [true, "Please add an email"], // The email is mandatory
    unique: true, // No two users can have the same email address
    match: [ // Use a regular expression to validate the email format
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, // The regex pattern for a standard email
      "Please add a valid email" // Error message if the email format is incorrect
    ] // End of match validation
  }, // End of email field definition
  role: { // Define the role field to distinguish users from admins
    type: String, // The role must be a string of text
    enum: ["user", "admin"], // Only "user" or "admin" are allowed values
    default: "user" // New users are assigned the "user" role by default
  }, // End of role field definition
  password: { // Define the password field for authentication
    type: String, // The password must be stored as a string of text
    required: [true, "Please add a password"], // The password is mandatory
    minlength: 6, // The password must be at least 6 characters long
    select: false // Do not include the password by default when querying users
  }, // End of password field definition
  resetPasswordToken: String, // Optional field to store a token for resetting passwords
  resetPasswordExpire: Date, // Optional field to store when the reset token expires
  createdAt: { // Define the field to track when the user was created
    type: Date, // The date must be a valid date object
    default: Date.now // Set the default value to the current date and time
  } // End of createdAt field definition
}); // End of userSchema definition

// Encript password using bcrypt
userSchema.pre("save", async function (next) { // Run this function before saving a user document
  if (!this.isModified("password")) { // If the password has not been changed, move to the next step
    next(); // Skip the hashing process
  } // End of if condition
  const salt = await bcrypt.genSalt(10); // Generate a salt for hashing the password
  this.password = await bcrypt.hash(this.password, salt); // Hash the password with the salt and store it
}); // End of pre-save middleware

module.exports = mongoose.model("User", userSchema); // Export the User model based on the schema

/*
SUMMARY:
- This file defines the User schema for MongoDB using Mongoose.
- It includes validation for name, email, and password.
- It also includes middleware to hash the password before saving it to the database.
*/
