console.log("Working");

const form = document.querySelector("form");

// prevent the default action the browser has for the element

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("we prevented bad things!");

  // form processing

  // submitting the form data to an api
});
