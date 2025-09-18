"use strict";
var http = require("http");
var port = 3000;
var server = http.createServer();

server = http.createServer((req, res) => {
  var url = "http://shamil.com/blog.html?year=2025&month=December";
  var parse = URL.parse(url);

  res.write(parse.host);
  res.end();
});

server.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
