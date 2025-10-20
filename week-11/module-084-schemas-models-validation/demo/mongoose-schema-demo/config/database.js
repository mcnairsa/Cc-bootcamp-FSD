// we want to extract our DB setup into a separate module
// This file handles the MongoDB connection and can be imported anywhere

// add our requirements at the top
require("dotenv").config();
const mongoose = require("mongoose");

function connectDatabase() {
  // Connect to MongoDB using environment variable
  console.log("process.env.MONGODB_URI", process.env.MONGODB_URI)
  mongoose.connect(process.env.MONGODB_URI);
  console.log("Using database:", mongoose.connection.name);
  const database = mongoose.connection;

  // Handle connection errors
  database.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  // Handle successful connection
  database.once("open", () => {
    console.log("Connected to MongoDB successfully!");
    console.log("Database name:", database.name);
  });

  // Handle disconnection
  database.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });
}

module.exports = connectDatabase;
