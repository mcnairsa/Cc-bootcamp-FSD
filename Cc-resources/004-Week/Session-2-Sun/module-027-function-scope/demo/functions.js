
// declare a variable

let myNumber;

// initialize

myNumber = 5;

// define the function
// here is what our function does
// use action words for function name
function openDoor(){
    // your code goes here
    console.log("You opened the door");
}


// call, invoke, execute, run

openDoor();

// do a bunch of other stuff

openDoor();


// Parameters

function add(x,y){
    console.log(x + y)
}

add(1, 3)
add(12, 10) //  12 becomes x, 10 becomes y


// Return - keyword

// void // undefined

function addWithReturn(x, y) {
  return x + y;
}

let sum = addWithReturn(1, 3);
console.log(sum)