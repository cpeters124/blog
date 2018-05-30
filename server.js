const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Jesus is King!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://myblog-my-blog-cp.7e14.starter-us-west-2.openshiftapps.com/`);
});
