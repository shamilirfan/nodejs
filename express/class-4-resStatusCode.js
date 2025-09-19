"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.status(401).end();
});

app.get("/about", (req, res) => {
  res.status(201).end();
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
