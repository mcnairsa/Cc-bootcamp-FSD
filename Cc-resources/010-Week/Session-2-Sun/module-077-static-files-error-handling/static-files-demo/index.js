const express = require("express");
const path = require("path");

const app = express();

// Serve static files from 'public' directory
app.use(express.static("public"));

// Sample route to test static files
app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Static Files Demo</title>
            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <div class="container">
                <h1>Static Files Working!</h1>
                <p>This page uses static CSS and JavaScript.</p>
                <p>Check the browser console and network tab.</p>
            </div>
            <script src="/js/app.js"></script>
        </body>
        </html>
    `);
});

app.listen(3500, () => {
  console.log("Server running on port 3500");
  console.log("Test static files:");
  console.log("  http://localhost:3500/ (HTML with CSS/JS)");
  console.log("  http://localhost:3500/css/style.css (direct CSS)");
  console.log("  http://localhost:3500/js/app.js (direct JS)");
});
