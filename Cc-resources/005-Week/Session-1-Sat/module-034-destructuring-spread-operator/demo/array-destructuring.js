// You will use this a lot in react

function getPerson() {
  //pretend cant return an object must return an array
  return ["Bob", 40];
}

console.log(getPerson());

const person = getPerson();

console.log(person[1]);

// not good practice
// if(person[1] === "Sue")

//typically to solve

// const person = getPerson();
// const name = person[0];
// const age = person[1];

//if(name === "Sue")

// I can assign two variables at once

//const [name, age] = getPerson();
//console.log(name)
// swapping
const [age, name] = getPerson();
console.log(name)

// look up the way to swap variables on array destructuring