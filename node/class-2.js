"use strict";
var http = require("http");
const port = 3000;

var server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`<h1>Not found! ${404}</h1>`);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
