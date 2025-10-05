console.log("We are running code outside the browser.");

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

console.log("added 1 + 10 and got:", add(1, 10));

module.exports = {
    add,
    subtract
}