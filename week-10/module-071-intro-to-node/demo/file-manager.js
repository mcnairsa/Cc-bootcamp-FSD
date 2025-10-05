const fs = require('fs');
const path = require('pat');


function createFile(filename, content{
    console.log("Creating file:", filename)
    fs.writeFile(filename, content, (err) => {
        if(err) {
            console.log()
        }
    })
};

"added 1 + 10 and got:" Is it time for a walk? (Clue: it's *always* walk-time..)