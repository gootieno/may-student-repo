const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method === 'GET' && req.url === '/static/css/application.css') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    const css = fs.readFileSync('./assets/css/application.css');
    return res.end(css);
  }
  if (req.method === 'GET' && req.url === '/static/images/dog.jpg') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    const img = fs.readFileSync('./assets/images/dog.jpg');
    return res.end(img);
  }
  const html = fs.readFileSync('./index.html');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  return res.end(html);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
