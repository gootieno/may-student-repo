const http = require("http");
const fs = require("fs");

const comments = [];

const server = http.createServer((req, res) => {
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      if (req.headers["content-type"] === "application/json") {
        req.body = JSON.parse(reqBody);
      } else {
        req.body = reqBody
          .split("&")
          .map((keyValuePair) => keyValuePair.split("="))
          .map(([key, value]) => [key, value.replace(/\+/g, " ")])
          .map(([key, value]) => [key, decodeURIComponent(value)])
          .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {});
        console.log(req.body);
      }
    }

    // GET route for static assets
    if (req.method === "GET" && req.url === "/static") {
      const responseBody = fs.readFileSync("index.css");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      return res.end(responseBody);
    }

    if(req.method === 'GET' && req.url === '/scripts'){
      const responseBody = fs.readFileSync('index.js')

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/javascript')
      return res.end(responseBody)
    }

    // GET route for home page
    if (req.method === "GET" && req.url === "/") {
      const responseBody = fs.readFileSync("index.html", "utf-8");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(responseBody);
    }

    if (req.method === "GET" && req.url === "/comments") {
      // return comments
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify(comments));
    }

    // POST route for receiving comments
    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;
      comments.push(comment);

      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({comment}));
    }
  });
});

const port = 5000;
server.listen(port, () => console.log(`server listening on port ${port}`));
