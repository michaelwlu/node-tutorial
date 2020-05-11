const fs = require('fs');

fs.unlink('test-delete.txt', err => {
  if (err) throw err;
  else console.log('File deleted');
});