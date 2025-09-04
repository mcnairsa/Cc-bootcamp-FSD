// Car

// methods > action -> accelerate
// properties > attributes about that object > color

//properties
// year, make, model, color, price, maxSpeed

//methods
// accelerate
// brake
// start

const myCar = {}; // one way to create an object
myCar.year = 2010;
myCar.make = "Honda";
myCar.model = "Accord";

console.log(myCar);

// initalize an object
const otherCar = {
  year: 2000,
  make: "Ford",
  model: "F150",
  "has space": "value of has space",
  nested: { nestedProperty: "nestedValue" },
};

console.log(otherCar);

// properties using dot and bracket notation

console.log(otherCar.year);
console.log(otherCar["has space"]);
console.log(otherCar["model"]);

// i like using dot notation when I can
console.log(otherCar["mode"]); //this doesn't exist and I get no error until I run it
console.log(otherCar.mode); // mode may not exist on type error underline on mode

// delete properties

delete otherCar.year;

console.log(otherCar); // year is now gone!

//nested properties
console.log(otherCar.nested.nestedProperty);
console.log(otherCar["nested"]["nestedProperty"]);
// for in loops
// loop over objects using key value pairs

for (const key in otherCar) {
  console.log("key:", key);

  // what could we do with the key?

  // access all of the values

  console.log("value:", otherCar[key]);
}

// hasOwnProperty
// we can check if a object has a property
// error checking
console.log(otherCar.hasOwnProperty("year"));

// functions

const accountNumber = "12345678abcs";

const smartBankAccount = {
  accountNumber: "12345-67890",
  owner: "Sarah Johnson",
  balance: 1250.75,

  // methods
  print: function () {
    console.log(`${this.accountNumber}, ${this.owner}, ${this.balance}`);
  },

  //deposit
  //withdraw
  //getStatement
};

// object methods

const user = {
  name: "Alex Thompson",
  email: "alex@email.com",
  age: 28,
  skills: ["JavaScript", "React", "Node.js"],
};

const keys = Object.keys(user);
console.log(keys);

const values = Object.values(user);
console.log(values);

const entries = Object.entries(user);
console.log(entries);

// - **Missing `this` keyword:** `balance += amount` instead of `this.balance += amount` in methods
// - **Arrow functions in methods:** `deposit: (amount) => { this.balance += amount }` - `this` doesn't work!

// create a car object that is reusable

// constructor

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.start = function () {
    console.log(`you started your ${this.model}`);
  };
}

const honda = new Car("Honda", "Accord", 2025, "Orange");
const ford = new Car("Ford", "Mustang", 2010, "Red");
console.log(honda);
console.log(ford)

let cars = [honda, ford];

for (const car of cars) {
    car.start()
}