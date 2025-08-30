// Global
let companyName = "Codecademy";


// using global
function printName(){
    console.log(companyName);
}
printName()

// Function


function doStuff(){
    let functionScoped = "this is not available outside the function";
}

// can't access outside of function
// console.log(functionScoped)

// Block

// this is weird example
{
    let blockScoped = "only in the curly braces"
}

// can't access outside of those curly braces

//console.log(blockScoped)

// normal example

if(true){
    let blockScopedIf = "scoped to if"
}

//console.log(blockScopedIf) // not defined error again

// Const

const PI = 3.14;

// PI = 3.33;