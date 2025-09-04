// array methods are just functions assoiciated with the array data type

const fruits = ["banana", "kiwi", "cherry", "apple", "strawberry"];

// fruits has functions we can use

// for any method

// what are the inputs (sometimes there are many different ways to call a method)
// could take in 1 parameter, or it could take in 3

// whats the expected output

console.log(fruits.push("grapes")) // what does this return? its a number

// pop

console.log(fruits.pop())

console.log(fruits) //back to how it was before

// shift and unshift 
fruits.unshift("grapes")
console.log(fruits)

console.log(fruits.shift())
console.log(fruits)


// find, includes, map, filter, reduce, some, every, splice, slice

// filter
function moreThanSixCharacters(str){
    if(str.length > 6){
        return true;
    }
    return false;
    // return str.length > 6;
}

console.log(fruits.filter(moreThanSixCharacters))

// arrow functions

console.log(fruits.filter(str => str.length > 6))


// let newArray = []
// for (let index = 0; index < item.length; index++) {
//     if (item[index].length > 6){
//         newArray.push(item);
//     }
// }
// return newArray;





// map, reduce

