/*
After a bit of surfing about I got to this:
import fs from 'node:fs';

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

from here:
https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs

*/

/* So the first iteration of the solution is:
import fs from 'node:fs';

fs.readFile('../modules-list-extended.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
// console.log(data); // This was to confirm the write
const lineByLine = data.split('\r\n');
console.log(lineByLine);
});

*/


/* 
That got me to this output...

sam@DESKTOP-OQ2C841 MINGW64 ~/projects/Cc-bootcamp-FSD/FSD-modules-convert (main)
$ node modules-convert.js
[
  '| ------ | ---- | ------ | --- | ----------------------------------------------------------------------------------------------------------------------------------------                                                    ',
  '| Wk/Ssn | Time | Module | [X] | Subject                                           | Topics                                                                                                         |',
  '| ------ | -----| ------ | --- |-------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |',
  '| 01/1   | 0:12 | 1      | [ ] | HTML Fundamentals                                 | Onboarding + IDE [1:00], AI for Learning [1:18], Intro to Web Development [0:38]                               |',
  '| 01/1   | 1:34 | 2      | [ ] | HTML Fundamentals                                 | HTML5 Document Structure, Doctype, Elements, Attributes, Emmet, W3C Validator                                  |',
  '| 01/1   | 2:33 | 3      | [ ] | HTML Fundamentals                                 | Semantic Elements, block vs inline [2:46]                                                                      |',

 (much of what gets written out is ommitted here)
  ... 42 more items 

  Note the '\r\n' We're on a Windows box. Why? See here:
  https://softwareengineering.stackexchange.com/questions/29075/difference-between-n-and-r-n

So now we have an array contiaining one element for each line in the file. This includes the table format lines that we aren't interested in. Might be easiest to delete those manually, we'll see how it goes.

Next, we want to separate out the columns...

*/
/*
import fs from 'node:fs';

fs.readFile('../modules-list-extended.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
// console.log(data); // Confirm the read works
const rows = data.split('\r\n'); // 'lineByLine' renamed to 'row'
// console.log(lineByLine); // Confirm that the split works

// Now we want a 2d array of that splits out the elements from within each row into a separate array item
for (let row of rows)  {
  const element = row.split('|');
  console.log(element);
}
});
*/


// We didn't get a 2d array but that doesn't matter.
// We can take what we've got and convert the arrays into objects
/* Now I have this output

sam@DESKTOP-OQ2C841 MINGW64 ~/projects/Cc-bootcamp-FSD/FSD-modules-convert (main)
$ node modules-convert.js
[
  '',
  ' ------ ',
  ' ---- ',
  ' ------ ',
  ' --- ',
  ' -------------------------------------------------- ',
  '--------------------------------------------------------------------------------------                                                    ',
  ''
]
[
  '',
  ' Wk/Ssn ',
  ' Time ',
  ' Module ',
  ' [X] ',
  ' Subject                                           ',
  ' Topics                                                                                                         ',
  ''
]
[
  '',
  ' ------ ',
  ' -----',
  ' ------ ',
  ' --- ',
  '-------------------------------------------------- ',
  ' -------------------------------------------------------------------------------------------------------------- ',
  ''
]
[
  '',
  ' 01/1   ',
  ' 0:12 ',
  ' 1      ',
  ' [ ] ',
  ' HTML Fundamentals                                 ',
  ' Onboarding + IDE [1:00], AI for Learning [1:18], Intro to Web Development [0:38]                               ',
  ''
]
[
  '',
  ' 01/1   ',
  ' 1:34 ',
  ' 2      ',
  ' [ ] ',
  ' HTML Fundamentals                                 ',
  ' HTML5 Document Structure, Doctype, Elements, Attributes, Emmet, W3C Validator                                  ',
  ''
]
...
[
  '',
  ' 18     ',
  ' 27   ',
  ' 137    ',
  ' [ ] ',
  ' Career Preparation & Graduation                   ',
  ' Complete professional resume and LinkedIn profile                                                              ',
  ''
]
[
  '',
  ' 18     ',
  ' 27   ',
  ' 138    ',
  ' [ ] ',
  ' Career Preparation & Graduation                   ',
  ' Final Presentations & Graduation Ceremony                                                                      ',
  ''
]
[
  '',
  ' -----  ',
  ' ---- ',
  ' ------ ',
  ' --- ',
  ' ------------------------------------------------- ',
  ' -------------------------------------------------------------------------------------------------------------- ',
  ''
]

Note that the 3rd element in each 'row' array is originally the '27-week version week number. These were then manually removed because I want this to hold either and empty string or the start time of that module.
I'll also delete the table formatting rows (e.g. the last array) because there's not many and doing that programatically isn't worth the effort.

For reference this is the headings row
| Wk/Ssn | Time | Module | [X] | Subject                                           | Topics                                                                                                         |
Wk/Ssn = the week and session number so 02/1 is Week 2, 1st Session (Saturday)
Time = Start time of the Module
Module = What it says on the tin
Topics = More detail about what the module covers

*/

/*
Next thing is to convert 

*/

import fs from 'node:fs';

// let objectToWrite = {};
// let objectToWrite = []; // moved to somewhere closer to where we need it
fs.readFile('../modules-list-extended-stripped.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
// console.log(data); // Confirm the read works
const rows = data.split('\r\n'); // 'lineByLine' renamed to 'rows'
// console.log(lineByLine); // Confirm that the split works

// Now we want a 2d array of that splits out the elements from within each row into a separate array item
let splitWeekSession;
let objectToWrite = [];

// console.log(typeof(objectToWrite));
for (let row of rows)  {
  // gives us an array for each element that contains the 'field' values as items in the array
  const items = row.split('|');
//  console.log(element); // for testing the output
// now we make each row into an object
/* 
  if (items[1].includes('/')) {
    let splitWeekSession = items[1].split('/');
    console.log(splitWeekSession);
  } else {
    let splitWeekSession = [items[1], '']
    console.log(splitWeekSession);
  }
    */
  // can I do that with a ternary? 
  // WooHoo! It works, sort of; I'm not getting strings but that doesn't matter for now.

  items[1].includes('/') ? splitWeekSession = items[1].split('/') : splitWeekSession = [items[1], ' '];

  //const rowObject = `{weekNumber: ${items[1].trim()}, startTime: ${items[2].trim()}, moduleNumber: ${items[3].trim()}, completed:${items[4].includes('X')||false}, moduleTopic: "${items[5].trim()}", moduleSubTopic: "${items[6].trim()}"}`;
  
  // const rowObject = `{weekNumberAndSession: ${splitWeekSession}, startTime: ${items[2].trim()}, moduleNumber: ${items[3].trim()}, completed:${items[4].includes('X')||false}, moduleTopic: "${items[5].trim()}", moduleSubTopic: "${items[6].trim()}"}`;

  // const rowObject = `{weekNumber: ${splitWeekSession[0].trimEnd()}, sessionNumber: ${splitWeekSession[1]}, startTime: ${items[2].trim()}, moduleNumber: ${items[3].trim()}, completed:${items[4].includes('X')||false}, moduleTopic: "${items[5].trim()}", moduleSubTopic: "${items[6].trim()}"}`;

  // OK so writing it as a string literal was OK to start with, now we move on from that
  
  // Fell down a rabbit hole trying to turn start time into a valid JS time value
  // ... but we don't need to do that, a string is fine for now.
  const rowObject = {
  weekNumber: Number(splitWeekSession[0].trim()),
  sessionNumber: Number(splitWeekSession[1]),
  startTime: items[2].trim(),
  moduleNumber: Number(items[3].trim()),
  completed: items[4].includes('X')||false,
  moduleTopic: items[5].trim(),
  moduleSubTopic: items[6].trim()
};  
  // console.log(splitWeekSession);
  //  console.log(rowObject);

  // Now I have to put all the'rowObject's together as one thing
  // object.assign(source, target) where target is the result of the previous iteration?
  // or .push() them to an array?
  // which is going to play nicely-er with JSON.stringify()?

  // Oh! hangOn! ... first I have to get my splitWeekSession to be two separate elements
  // ... have to update items[1] with the week nbr and .splice() in the session as another array item
  // No! Much easier just to add them as  splitWeekSession[0] and splitWeekSession[1]

// objectToWrite += rowObject; // This is not how you add to an object!
  objectToWrite.push(rowObject); // Yes, I know it's not an object any more but if this works, I'll change the name later
//  console.log(objectToWrite);
//  objectToWrite.assign(objectToWrite, rowObject); // Not correct either object.assign() creates one object. That's not what we want to do here.
}
// console.log(objectToWrite);

// console.log(typeof(objectToWrite));
const jsonOutput = JSON.stringify(objectToWrite);
console.log(jsonOutput);

// Now finally we can write the thing out, yeah?
//   OK so it's an array of objects - does that matter?
//   We shall see when we read it back in to our app.
fs.writeFile('../modules-list.json', jsonOutput, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('It worked!'); // file written successfully
  }
});


});

// Final Thing for now is to add a key to the objects so we can use them in the .map() -> <ul><li>...</li></ul> pattern

// Here's the whole thing without all the scrubbing out and over-commenting
//   This won't run bcs we have the stuff up there as well, 
//      it's just here so we can 'Save As' to a new version

// The stuff for handling file reads and writes
import fs from 'node:fs';

// get the file data
fs.readFile('../modules-list-extended-stripped.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

// split the file into an array of 'rows'
const rows = data.split('\r\n');

// create the holding variables
let splitWeekSession;
let objectToWrite = [];

// some of the 'time' fields have data some don't
items[1].includes('/') ? splitWeekSession = items[1].split('/') : splitWeekSession = [items[1], ' '];
for (let row of rows)  {
  // gives us an array for each element that contains the 'field' values as items in the array
  const items = row.split('|');

  items[1].includes('/') ? splitWeekSession = items[1].split('/') : splitWeekSession = [items[1], ' '];

  const rowObject = {
  weekNumber: Number(splitWeekSession[0].trim()),
  sessionNumber: Number(splitWeekSession[1]),
  startTime: items[2].trim(),
  moduleNumber: Number(items[3].trim()),
  completed: items[4].includes('X') || false,
  moduleTopic: items[5].trim(),
  moduleSubTopic: items[6].trim()
};  
  objectToWrite.push(rowObject); // Yes, I know it's not an object any more but if this works, I'll change the name later
}
const jsonOutput = JSON.stringify(objectToWrite);
console.log(jsonOutput);
fs.writeFile('../modules-list.json', jsonOutput, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('It worked!'); // file written successfully
  }
});


});

