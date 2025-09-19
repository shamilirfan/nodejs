"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/bangladesh", (req, res) => {
  res.redirect(`http://localhost:${port}/nepal`);
});

app.get("/nepal", (req, res) => {
  res.send("Welcome to Nepal");
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
