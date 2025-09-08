function fetchUserData() {
  fetch("/api/user/123") //1
    .then((response) => response.json()) //2
    .then((user) => {
      return fetch(`/api/posts/${user.id}`); //3
    })
    .then((response) => response.json()) //4
    .then((posts) => {
      console.log("User posts:", posts); //5
    })
    .catch((error) => {
      //6
      console.error("Error:", error);
    });
}

//await/async

// .then / promises -> await/async

// i = i + 1 -> i++

// functions vs arrow function

// A

async function fetchUserData() {
  // we don't have the .then chaining so
  // wrap it all with try so we can catch any failures
  // try catch replaces .catch for await/async
  try {
    const response = await fetch("/api/user/123"); //1
    const user = await response.json(); //2

    const postsResponse = await fetch(`/api/posts/${user.id}`); //3
    const posts = await postsResponse.json(); //4

    console.log("User posts:", posts); //5
  } catch (error) {
    //6
    console.error("Error:", error);
  }
}

// Function declaration
async function getData() {
  return "Hello World"; // Actually returns Promise.resolve("Hello World")
}

// Arrow function
const getData = async () => {
  return "Hello World";
};

// .then
getData().then((result) => console.log(result));

// aync/await
async function doStuff() {
  let greeting = await getData();
  console.log(greeting);
}
