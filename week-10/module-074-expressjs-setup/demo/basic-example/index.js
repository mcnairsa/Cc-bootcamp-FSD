// bring up the ExpressJS example
const express = require('express');

// create the app object
const app = express();

// Set port number
const PORT = 3010;

console.log("Starting basic Express app");

// route
// app.verb("path", callbackFunction)
// localhost:3010/hello
// app.get()

// localhost:3010
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
  console.log("Visit http://localhost:3010 to see the app");
  console.log("Press Ctrl+C to stop the server");
});