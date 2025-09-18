"use strict";
var http = require("http");
var fs = require("fs");
var port = 3000;
var server = http.createServer();

server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.writeFile("demo.txt", "Hello, World!", (error) => {
      if (error) {
        res.write("Fail write file");
        res.end();
      } else {
        res.write("Success write file");
        res.end();
      }
    });
  }
});

server.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
