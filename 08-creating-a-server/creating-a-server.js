const http = require('http');

// shorthand version of server
const server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hey ninjas');
});

/* longhand version of server

const server = http.createServer();
server.on('request', (req, res) => {
  // code here
});

*/

server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');