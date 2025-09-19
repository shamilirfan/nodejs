"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  var name = req.query.name;
  var age = req.query.age;

  res.send("Name: " + name + ` Age: ${age}`);
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
