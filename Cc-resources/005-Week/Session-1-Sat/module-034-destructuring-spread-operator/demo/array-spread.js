// Arrays Spread
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];
const proteins = ["chicken", "tofu"];

let groceryList = [];

// array of arrays
// groceryList.push(fruits);
// groceryList.push(vegetables);
// groceryList.push(proteins);
// console.log(groceryList);

// flat list of a array

groceryList = [...fruits, ...vegetables, ...proteins];

console.log(groceryList)