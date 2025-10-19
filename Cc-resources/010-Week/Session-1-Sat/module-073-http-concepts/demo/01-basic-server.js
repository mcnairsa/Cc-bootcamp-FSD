// node has a built in http server

const http = require("http");

console.log("Starting basic http server");

// Create the server

const server = http.createServer((request, response) => {
  console.log("\nIncoming Request:");
  console.log("Method:", request.method);
  console.log("URL:", request.url);
  console.log("HTTP Version:", request.httpVersion);
  console.log("Headers:", JSON.stringify(request.headers, null, 2));

  // Set response headers
  response.writeHead(200, {
    "Content-Type": "text/html",
    Server: "Codecademy-HTTP-Demo",
  });

  // Send response body
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>HTTP Concepts Demo</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .info { background: #f0f0f0; padding: 20px; border-radius: 5px; }
      </style>
    </head>
    <body>
      <h1>HTTP Server Response</h1>
      <div class="info">
        <p><strong>Request Method:</strong> ${request.method}</p>
        <p><strong>Request URL:</strong> ${request.url}</p>
        <p><strong>User Agent:</strong> ${request.headers["user-agent"]}</p>
        <p><strong>Response Status:</strong> 200 OK</p>
        <p><strong>Content-Type:</strong> text/html</p>
      </div>
      <p>This response demonstrates the basic HTTP request-response cycle!</p>
    </body>
    </html>
  `;

  response.end(html);
});

// open up a port
const PORT = 3000;

// start the server to handle requests
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Try visiting the URL in your browser to see HTTP in action!");
  console.log("Press Ctrl+C to stop the server");
});

// Handle server errors
server.on("error", (err) => {
  console.error("Server error:", err.message);
});
