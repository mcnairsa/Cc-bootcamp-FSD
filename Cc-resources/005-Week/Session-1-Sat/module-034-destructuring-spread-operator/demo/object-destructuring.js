//Object Destructuring
let myObject = {
  city: "Las Vegas",
  state: "Nevada",
  zip: 89111,
};

let { city, state, zip } = myObject; // association is the property names
console.log(city);
console.log(state);
console.log(zip);

// is equivalent to
// let city = myObject.city;
// let state = myObject.state;
// let zip = myObject.zip;

// Rule of  Thumb
// before an = sign destructuring
// inside of a function declaration
function nameStuff({ city }) {
  //
}

//equivalent
nameStuff(myObject.city)

// could get the same result 
function nameStuff(obj) {
  let city = obj.city;
}

nameStuff(myObject);

// End Object Destructuring
