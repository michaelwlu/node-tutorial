const fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMeAsync.txt', data, err => {});
  console.log('write done')
})

console.log('test');
