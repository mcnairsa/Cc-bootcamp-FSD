const mongoose = require('mongoose');

// Connect &c

mongoose.connect("mongodb://localhost:27017/Codecademy");
console.log("Connecting to MongoDB...");

const database = mongoose.connection;

database.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

// Success
database.once("open", async () => {
    console.log("Connected to MongoDB successfully!");
// Return records
const imagesCollection = database.collection("Images");
const allImages = await imagesCollection.find().toArray();

console.log("all images", allImages);

});

