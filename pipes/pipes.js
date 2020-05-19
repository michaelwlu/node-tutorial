const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  // pipes read stream directly to response (which is a writable stream)
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
