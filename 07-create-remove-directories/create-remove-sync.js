const fs = require('fs');

fs.mkdirSync('test-directory');

setTimeout(function() {
  fs.rmdirSync('test-directory')
}, 2000);