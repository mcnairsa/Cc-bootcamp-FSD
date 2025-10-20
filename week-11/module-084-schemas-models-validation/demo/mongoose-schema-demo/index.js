// Using a separate module for our DB Connection

const connectDatabase = require("./config/database");
const Student = require("./models/Student");

// Connect to the Database
connectDatabase();

const mongoose = require("mongoose");

mongoose.connection.once("open", async () => {
  //  const imagesCollection = database.collection("Images");

  //  const allImages = await imagesCollection.find().toArray();

  //  console.log("all images", allImages);

  // CRUD example

  //Create
  // equivalent to db.Students.insertOne(<object>);
  await Student.insertOne({
    name: "Bilbo Baggins",
    email: "hobbit@hobbiton.com",
  });

  //Read
  // equivalent to the db.Students.find() on MongoDb
  const students = await Student.find(); // Read  from CRUD

  //Update
  // equivalent to db.Students.updateOne(<object>)
  await Student.updateOne(
    { name: "Bilbo Baggins" },
    { $set: { email: "hobbit@hotmail.com" } }
  );

  //Delete
  // equivalent to db.Students.deleteOne(<object>);
  await Student.deleteOne({
    email: "bob@codecademy.com",
  });
  console.log("Students are:", students);
});
