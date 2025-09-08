function sayHello(name) {
  console.log(`Hello ${name}`);
}

function greetUser(name, callbackFunction) {
  console.log("Processing greeting...");

  // decides when to execute this
  callbackFunction(name); // Call the function we received
  console.log("greeting complete");
}


greetUser("Bob", sayHello)


// tl;dr

// we used to use them to handle async code

// it was painful - Callball Hell