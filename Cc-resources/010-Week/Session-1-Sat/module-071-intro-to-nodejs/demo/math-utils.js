console.log("We are running code outside the browser");

function add(a, b) {
  return a + b;
}

function subtract(a,b){
  return a - b;
}

// console.log("added 1 + 10 and got", add(1, 10)); // 11

// console.log(add())

// modules to export out our functions

// CommonJS

// module.exports - exports not export - make sure to spell it correctly

module.exports = {
    add, // dont run the function add() - NAN
    subtract
}
