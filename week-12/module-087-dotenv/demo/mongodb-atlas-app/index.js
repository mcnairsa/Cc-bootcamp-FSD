const mongoose = require("mongoose");
require("dotenv").config();

// use the mongoose object and call connect with our URI
//mongoose.connect("mongodb://localhost:27017/Codecademy");
// we want to extract this out to a env variable which will protect our
// secrets

// This assumes you added the example data

console.log("This is our connection string", process.env.MONGODB_CONNECT);

mongoose.connect(process.env.MONGODB_CONNECT);
console.log("Connecting to MongoDB...");

const database = mongoose.connection;

// Handle Errors - This will give us feedback if we have issues
database.on("error", (error) => {
  console.error("MongoDb connection error:", error);
});

// Success message on connect
database.once("open", async () => {
  const moviesCollection = database.useDb("sample_mflix").collection("movies");

  const allMovies = await moviesCollection.find().toArray();

  console.log("\n=== All Movie Titles ===");
  allMovies.forEach((movie, index) => {
    console.log(`${index + 1}. ${movie.title}`);
  });

  console.log(`\nTotal movies: ${allMovies.length}`);
});