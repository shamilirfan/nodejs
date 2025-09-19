"use strict";
var express = require("express");
var app = express();
var port = 3000;

// Simple string response
app.get("/", (req, res) => {
  res.send("Home Page with get method");
});

app.post("/about", (req, res) => {
  res.end("About Page with post method");
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
