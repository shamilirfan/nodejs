"use strict";
var http = require("http");
var fs = require("fs");
var port = 3000;
var server = http.createServer();

server = http.createServer((req, res) => {
  if (req.url == "/") {
    var file = fs.writeFileSync("hi.txt", "Hi, World!");

    if (file) {
      res.write("File write fail");
      res.end();
    } else {
      res.write("File write success");
      res.end();
    }
  }
});

server.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
