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

    // GET route for static assets
    if (req.method === "GET" && req.url === "/static") {
      const responseBody = fs.readFileSync("index.css");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      return res.end(responseBody);
    }

    // GET route for home page
    if (req.method === "GET" && req.url === "/") {
      const htmlPage = fs.readFileSync("index.html", "utf-8");

      let commentsList = "";
      for (const comment of comments) {
        commentsList += `<li>${comment}</li>`;
      }

      const responseBody = htmlPage.replace(
        /#{comments}/,
        comments.length ? commentsList : "<li>No Comments Created</li>"
      );

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(responseBody);
    }

    // POST route for receiving comments
    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;
      comments.push(comment);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }
  });
});

const port = 5000;
server.listen(port, () => console.log(`server listening on port ${port}`));
