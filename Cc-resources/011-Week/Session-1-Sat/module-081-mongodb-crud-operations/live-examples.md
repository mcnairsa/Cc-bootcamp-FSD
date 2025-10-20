<!-- Put this into the shell via Compass -->
<!--
Go to localhost:27017

Codecademy

Students

Open MongoDb Shell
-->
<!-- run each command one at a time and make sure that find works -->

```javascript
db.Students.insertOne({ name: "Sarah", email: "sarah@codecademy.com" });

db.Students.find();

db.Students.insertMany([
  {
    name: "Alice Smith",
    email: "alice@example.com",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
  },
  {
    name: "Charlie Davis",
    email: "charlie@example.com",
  },
]);

db.Students.find();

db.Students.updateOne(
  { name: "Alice Smith" },
  { $set: { email: "alice.s@example.com" } }
);

db.Students.find();

db.Students.deleteOne({ name: "Charlie Davis" });

db.Students.find();
```
