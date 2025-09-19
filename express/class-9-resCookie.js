"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.cookie("name", "Alice");
  res.cookie("age", 30);
  res.cookie("isActive", true);
  res.send("Home Page");
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
