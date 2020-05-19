const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29,
  };
  res.end(JSON.stringify(myObj)); // end method needs string
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
