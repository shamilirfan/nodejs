"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  var josnData = [
    { name: "Alice", age: 32, city: "New York" },
    { name: "Bob", age: 40, city: "Washington" },
    { name: "Rupa", age: 25, city: "Florida" },
  ];

  res.json(josnData);
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
