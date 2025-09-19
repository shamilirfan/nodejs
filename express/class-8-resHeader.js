"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.append("name", "Alice");
  res.append("age", 30);
  res.send("Home Page");
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
