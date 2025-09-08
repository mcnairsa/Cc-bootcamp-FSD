// sync code

// sometimes there are operations that we have to wait for
// JS isn''t going to wait for you

// Asynchronous functions
// reading from a file on the hard drive
// doing an api call

// emulating calling an REST API
function getTodaysWeather() {
  setTimeout(() => {
    console.log("getTodaysWeather Called");
  }, 500);
}

function getTomorrowsWeather() {
  const returnValue = new Promise((res) =>
    setTimeout(() => res("finished getTodaysWeather"), 1000)
  );
  return returnValue;
}

// performs in order

// its in order

console.log(1);
console.log(2); // this immediately executes after line 7
console.log(3); // this immediately executes after line 8
console.log(4); // ...
console.log(5); // ... this is synchronous

// wrap all the console in function that returns a promise

// function doStuff(){
// console.log(1);
// console.log(2); // this immediately executes after line 7
// console.log(3); // this immediately executes after line 8
// console.log(4); // ...
// console.log(5);
// return a promise
//}

doStuff
  .then
  //getTodaysWeather
  // getTomorrowsWeather().then((response) => {
  //   console.log("we called this first");
  //   console.log(response);
  //   console.log("we called this last");
  // });
  ();

// asynchronous call is here
getTodaysWeather(); // we didn't tell browser to wait
console.log(6);

// I want to JS that my function will come back at some point and treat my call
// synchronously

// call this in order

let x = console.log(getTomorrowsWeather());
console.log(x);

getTomorrowsWeather().then((response) => {
  console.log("we called this first");
  console.log(response);
  console.log("we called this last");
});
