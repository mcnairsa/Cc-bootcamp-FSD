const numbers = [2, 4, 6, 8]
const strings = ["abc", "def", "hij"]
const fruits = ["banana", "kiwi", "cherry", "apple", "strawberry"]

console.log(numbers)

//indexing
console.log(numbers[0])


// I want to grab six from the list

// start counting from zero
//2 > 0, 4 > 1, 6> 2

console.log(numbers[2]) //6


// iterate over the array
// length = total items in the array
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

for (const number of numbers) {
    console.log(number)
}


const myArray = []


myArray.push(1)
console.log(myArray)


//map

//const fruits = ["banana", "kiwi", "cherry", "apple", "strawberry"]

console.log(fruits.map(x => x+"!"))

// reduce

// total from all of the items in a number array
// completely change the structure of each item in an array
  //objects etc