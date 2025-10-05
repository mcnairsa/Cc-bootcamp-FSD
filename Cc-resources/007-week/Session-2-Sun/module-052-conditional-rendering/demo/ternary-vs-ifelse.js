// ternary is to if/else

// arrow functions are to standard functions

// same thing, different syntax

let isLoggedIn = false;

if (isLoggedIn) {
  //yep
  console.log("Logged in");
} else {
  //nope
  console.log("You are not logged in");
}

// // turns into this with ternary

isLoggedIn ? console.log("Logged in") : console.log("You are not logged in");
