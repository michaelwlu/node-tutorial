const fs = require('fs');

const readMe = fs.readFileSync('readMe.txt', 'utf8');
// first parameter: file; second parameter: encoding

console.log(readMe);

fs.writeFileSync('writeMe.txt', readMe);
// first parameter: file; second parameter: data