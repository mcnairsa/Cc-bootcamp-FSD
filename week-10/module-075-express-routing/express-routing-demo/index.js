// bring up the ExpressJS example
const express = require('express');

// create the app object
const app = express();

app.use(express.json());

// Set port number
const PORT = 3000;

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];


// GET All Users

// rest api example of sending back json
app.get("/users", (req, res) => {
  res.json({
    users: users,
    count: users.length,
  });
});

// console.log("Starting basic Express app");

app.post('/users', (req, res) => {
    const {name, email} = req.body;
    const newUser = {
    id: users.length + 1,
    name,
    email
};

users.push(newUser);
res.status(201).json({
    message
})
// localhost:3000
app.get("/", (req, res) => {
    console.log("GET request received at /");

res.send(`
    <h1>Hello from Express.js!</h1>
    <p>This your first</p>
    <p>Server running on</p>
    `);
});
// start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
  console.log("Visit http://localhost:3000 to see the app");
  console.log("Press Ctrl+C to stop the server");
});