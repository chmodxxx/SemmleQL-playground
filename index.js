const fs = require('fs'),
      path = require('path');

function readFileHelper(p) {     // #2
  p = path.resolve(p);           // #3
  fs.readFile(p,                 // #4
    'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

x = process.argv[2]
y = x
readFileHelper(y); // #1
