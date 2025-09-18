"use strict";
var http = require("http");
var fs = require("fs");
var port = 3000;
var server = http.createServer();

server = http.createServer((req, res) => {
  if (req.url == "/") {
    var file = fs.readFileSync("fs.html");
    res.write(file);
    res.end();
  }
});

server.listen(port, () =>
  console.log(`Server is running at http://localhost${port}`)
);
