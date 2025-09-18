"use strict";
var http = require("http");
var fs = require("fs");
var port = 3000;
var server = http.createServer();

server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.unlink("deleteFile.txt", (error) => {
      if (error) {
        res.write("File delete fail");
        res.end();
      } else {
        res.write("File delete success");
        res.end();
      }
    });
  }
});

server.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
