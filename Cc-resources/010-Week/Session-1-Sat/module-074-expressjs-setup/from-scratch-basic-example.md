0. cd to basic-example-scratch directory (create one if you need to)

1.

```bash
npm init
```

2.

```bash
npm install express
```

3.

```bash
npm install -D nodemon
```

4. create index.js with these contents

```
// Basic express app

// bring in the express factory function
const express = require("express");
// create the app object, by running the express function
const app = express();
// set up the port
const PORT = 3010;

console.log(" Starting Basic Express App");

// route
// app.verb("path", callbackFunction)
// localhost:3010/hello
// app.get("/hello", callBackFunction)

/// localhost:3010
app.get("/", (req, res) => {
  console.log("GET request received at /");
  res.send(`
    <h1>Hello again from Express.js!</h1>
    <p>This is your first Express.js application.</p>
    <p>Server running on port ${PORT}</p>
`);
});

// start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
  console.log("Visit http://localhost:3010 to see the app");
  console.log("Press Ctrl+C to stop the server");
});
```

5. run

```bash
npx nodemon index.js
```
