"use strict";
var http = require("http");
var fs = require("fs");
var port = 3000;
var server = http.createServer();

server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("fs.html", (error, data) => {
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
