"use strict";
var http = require("http");
var fs = require("fs");
var port = 3000;
var server = http.createServer();

server = http.createServer((req, res) => {
  if (req.url == "/") {
    var rename = fs.renameSync("helloSync.txt", "renameHelloSync.txt");

    if (rename) {
      res.write("Rename fail");
      res.end();
    } else {
      res.write("Rename success");
      res.end();
    }
  }
});

server.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
