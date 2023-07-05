const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  nextDogId++;
  const newDogId = nextDogId;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      // "username=app+appacademy&password=password%21"
      req.body = reqBody
        .split("&") //[username=app+academy, password=password%21]
        .map((keyValuePair) => keyValuePair.split("=")) //[[username, app+academy], [password, password%21]]
        .map(([key, value]) => [key, value.replace(/\+/g, " ")]) //[[username, app academy], [password, password%21]]
        .map(([key, value]) => [key, decodeURIComponent(value)]) //[[username, app academy], [password, password!]]
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
        //{username = 'app academy', password = 'password!'}
      console.log(req.body);
    }
    // Do not edit above this line
    // define route handlers here
    if (req.method === 'GET' && req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog Club');
    }
    if (req.method === 'GET' && req.url === '/dogs') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dogs Index');
    }
    if (req.method === 'GET' && req.url === '/dogs/new') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog create form page');
    }
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlSplit = req.url.split('/'); //['', 'dogs', 'id']
      if (urlSplit.length === 3) {
        const dogId = urlSplit[2];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end(`Dog details for dogId: ${dogId}`);
      }
    }
    if (req.method === 'POST' && req.url === '/dogs') {
      res.statusCode = 302;
      res.setHeader('Location', '/dogs/' + getNewDogId());
      return res.end();
    }
    if (req.method === 'POST' && req.url.startsWith('/dogs/')) {
      const urlSplit = req.url.split('/');
      if (urlSplit.length === 3) {
        const dogId = urlSplit[2];
        res.statusCode = 302;
        res.setHeader('Location', '/dogs/' + dogId);
        return res.end();
      }
    }
    if (req.method === 'GET' && req.url.startsWith('/dogs/')) {
      const urlSplit = req.url.split('/');
      if (urlSplit.length === 4 && urlSplit[3] === 'edit') {
        const dogId = urlSplit[2];
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end(`Dog edit form page for dogId: ${dogId}`);
      }
    }
    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
