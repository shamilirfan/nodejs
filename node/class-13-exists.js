"use strict";
var http = require("http");
var fs = require("fs");
var port = 3000;
var server = http.createServer();

server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.exists("exists.txt", (error) => {
      if (error) {
        res.write("Exist fail");
        res.end();
      } else {
        res.write("Exist success");
        res.end();
      }
    });
  }
});

server.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
