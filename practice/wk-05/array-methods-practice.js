// ============================================
// ARRAY METHODS PRACTICE - BEGINNER LEVEL
// ============================================

// Starting data
const fruits = ['apple', 'banana', 'cherry'];
const numbers = [1, 2, 3, 4, 5];
const prices = [10, 25, 5, 40, 15];

// ============================================
// PART 1: Basic Array Methods
// ============================================

// TODO: Use the push() method to add 'orange' to the fruits array
// Write your code here:
fruits.push('orange');

// Extra test
// console.log('Fruits after push and before pop:', fruits);

// TODO: Use the pop() method to remove the last item from fruits
// Store the removed item in a variable called 'removedFruit'
// Write your code here:
const removedFruit = fruits.pop();

// Test (uncomment to see results):
// console.log('Fruits after push and pop:', fruits);
// console.log('Removed fruit:', removedFruit);


// ============================================
// PART 2: Finding Elements
// ============================================

// TODO: Use the find() method to find the first number greater than 3 in the numbers array
// Store the result in a variable called 'foundNumber'
// Write your code here:
// clue: use an arrow (callback?) function
// const foundNumber = numbers.find(number => number > 3)

// TODO: Use the includes() method to check if 'banana' is in the fruits array
// Store the result in a variable called 'hasBanana'
// Write your code here:
const hasBanana = fruits.includes('banana');

// Test (uncomment to see results):

// console.log('Found number:', foundNumber);
// console.log('Has banana:', hasBanana);


// ============================================
// PART 3: Transforming Arrays
// ============================================

// TODO: Use the map() method to create a new array with all numbers doubled
// Store the result in a variable called 'doubledNumbers'
// Write your code here:
// const doubledNumbers = numbers.map(number => number * 2);

// TODO: Use the filter() method to create a new array with only prices under 20
// Store the result in a variable called 'cheapPrices'
// Write your code here:
const cheapPrices = prices.filter(price => price < 20)


// Test (uncomment to see results):
// console.log('Original numbers:', numbers);
// console.log('Doubled numbers:', doubledNumbers);
// console.log('Original prices:', prices);
// console.log('Cheap prices:', cheapPrices);


// ============================================
// PART 4: Array Information
// ============================================

// TODO: Use the length property to find how many items are in the fruits array
// Store the result in a variable called 'fruitCount'
// Write your code here:
const fruitCount = fruits.length;

// TODO: Use the indexOf() method to find the position of 'cherry' in fruits
// Store the result in a variable called 'cherryPosition'
// Write your code here:
const cherryPosition = fruits.indexOf('cherry');

// Test (uncomment to see results):
// console.log('Number of fruits:', fruitCount);
// console.log('Cherry is at position:', cherryPosition);


// ============================================
// BONUS CHALLENGE
// ============================================

// TODO: Create a new array called 'colors' with at least 4 color names
// Then use THREE different array methods on it and log the results

// Write your bonus code here:
const colours = ['red', 'green', 'blue', 'cyan', 'yellow', 'magenta'];
colours.unshift('black');
console.log(`Starting state of array 'colours': ${colours}`);
console.log(`Array 'colours' after unshift('black'): ${colours}`);
colours.shift();
console.log(`Array 'colours' after shift(): ${colours}`);

console.log('\n');

console.log(colours.map(colour => `${colour} is the colour of my true love's eyes`));

const reversedColours = colours.toReversed();
console.log(reversedColours);

// Notes for beginners:
// - push() adds to the end, pop() removes from the end
// - find() returns the first matching element
// - includes() returns true/false
// - map() creates a new array by transforming each element
// - filter() creates a new array with elements that pass a test
// - length gives you the number of elements
// - indexOf() tells you the position of an element (starts at 0)