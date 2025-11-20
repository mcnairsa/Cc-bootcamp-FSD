/*
* Program: modules-convert.js
* Programmer: Sam McNair
* Date: 30-09-2025
* Version: 001
*
* Notes:
*   1. This is the same code as in ...-000.js
*   2. It works but isn't pretty
*
*/

// Final Thing for now is to add a key to the objects so we can use them in the .map() -> <ul><li>...</li></ul> pattern

// Here's the whole thing without all the scrubbing out and over-commenting
// See modules-convert-000.js for the learning process

// the stuff for handling file reads and writes
import fs from 'node:fs';

// get the file data
// btw fs.readFile is *acynchronous* so this disneywerks
// const modulesImport = fs.readFile('../modules-list-extended-stripped.md', 'utf8', (err, data) => { // do stuff with 'err' or 'data'
// });
// ... but this works fine bcs it's synchornous so it returns a value [https://stackoverflow.com/questions/10058814/get-data-from-fs-readfile]
const modulesImport = fs.readFileSync('../modules-list-extended-stripped.md', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  } 
}); 

const rows = modulesImport.split('\r\n'); // split the file into an array of 'rows'


let modulesOutput = [];
// create an object for each item in the rows array
for (let row of rows)  {
  const items = row.split('|'); // split out the fields within the row
// some of the week fields have the session number, some don't 
//    splitWeekSession is an array of [week, session]
  let splitWeekSession;
  items[1].includes('/') ? splitWeekSession = items[1].split('/') : splitWeekSession = [items[1], ' '];
  // build the object for the current row
  const rowObject = {
    weekNumber: Number(splitWeekSession[0].trim()),
    sessionNumber: Number(splitWeekSession[1]),
    startTime: items[2].trim(),
    moduleNumber: Number(items[3].trim()),
    completed: items[4].includes('X') || false, // some rows are already marked completed
    moduleTopic: items[5].trim(),
    moduleSubTopic: items[6].trim()
    };  
  
  modulesOutput.push(rowObject); 
  }

const jsonOutput = JSON.stringify(modulesOutput);
  
fs.writeFile('../modules-list.json', jsonOutput, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('It worked!'); // file written successfully
    // console.log(jsonOutput);
  }
});

/*
* 
* Another day another rabbit hole
*  https://jsonlint.com/
*    didn't seem to like my JSON
*  I have afeeling the file was just too big. I thought it was something to do with 
*    having multiple objects but this:
* https://stackoverflow.com/questions/28325994/how-are-multiple-objects-in-a-single-json-file-separated
*    suggests my [{}, {}] format is correct.
*/