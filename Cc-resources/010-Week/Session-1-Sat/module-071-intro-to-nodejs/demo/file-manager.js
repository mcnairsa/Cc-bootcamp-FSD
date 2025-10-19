// File Manager - Simple file operations with Node.js fs module

const fs = require("fs");
const path = require("path");

// create file

function createFile(filename, content) {
  console.log("Creating file", filename);
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error("Error creating file:", err.message);
    }
    console.log("File created successfully!");
  });
}



// List files in current directory
function listFiles() {
  console.log("\nListing files in current directory:");

  fs.readdir('.', (err, files) => {
    if (err) {
      console.error("Error reading directory:", err.message);
      return;
    }

    if (files.length === 0) {
      console.log("Directory is empty");
      return;
    }

    files.forEach((file, index) => {
      const filePath = path.join('.', file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for ${file}:`, err.message);
          return;
        }

        const type = stats.isDirectory() ? "[DIR]" : "[FILE]";
        const size = stats.isFile() ? `(${stats.size} bytes)` : "";
        console.log(`${index + 1}. ${type} ${file} ${size}`);
      });
    });
  });
}

// Read file contents
function readFile(filename) {
  console.log(`\nReading file: ${filename}`);

  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
      return;
    }
    console.log("File contents:");
    console.log("------------------------------");
    console.log(data);
    console.log("------------------------------");
  });
}

// use a setTimeout for testing
setTimeout(() => {
  listFiles();
}, 100);

setTimeout(() => {
  createFile(
    "demo-file.txt",
    `File Manager Demo
Created at: ${new Date().toISOString()}
Node.js Version: ${process.version}
Platform: ${process.platform}

This file was created by Node.js File Manager.
Browsers cannot create files on the local file system.`
  );
}, 500);


setTimeout(() => {
  readFile("demo-file.txt");
}, 1000);