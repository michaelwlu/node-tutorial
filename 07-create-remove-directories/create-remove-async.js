const fs = require('fs');

fs.mkdir('test-directory', () => {
  fs.readFile('readMe.txt', 'utf8', (err, data) => {
    fs.writeFile('./test-directory/writeMe.txt', data, err => {})
  })
});

setTimeout(() => {
  // cannot remove directories that are not empty, so delete file first, then use callback function to delete directory
  fs.unlink('./test-directory/writeMe.txt', () => {
    fs.rmdir('test-directory', () => {});
  });
}, 2000);
