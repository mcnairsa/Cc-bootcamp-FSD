console.log("working");

// Click EVENT START

// alert the user with a hello when
// they click on the Hello button

// select the hello button

const helloBtn = document.querySelector("button");

// add an event listener to that button
// addEventListener
// action/event
// callback function

function helloHandler(event) {
  console.log("Hello Handler was called");
  console.log("current target", event.currentTarget);

  console.log("target", event.target);
  //   stop any parent events from firing
  //   event.stopPropagation();

  alert("Hey, how are you doing!");
}

helloBtn.addEventListener("click", helloHandler);

// within the event listener we call
// alert to the hello

// arrow function

// helloBtn.addEventListener("click", () => {
//   alert("this iworks?");
// });

// standard anonymous function
helloBtn.addEventListener("click", function (event) {
  alert("this iworks?");
});

// Click EVENT END

// Mouse Event Start

const h2 = document.querySelector("h2");

h2.addEventListener("mouseover", function (event) {
  // look at the event

  console.log("event", event);

  event.currentTarget.textContent = "Mouse Over";
});

h2.addEventListener("mouseout", function (event) {
  // look at the event

  console.log("event", event);

  event.currentTarget.textContent = "Mouse Out";
});

// Mouse Event End

// target vs currentTarget

//when you click in main, what happens?
// what are the logs that are fired off?
// what about when you click on the button?

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", function (e) {
  // this can be stopped if I add
  // stopPropogation to a child event
  console.log("main event handler fired");
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
});
