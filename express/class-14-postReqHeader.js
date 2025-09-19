"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.post("/", (req, res) => {
  res.send("Name: " + req.header("name") + ` Age: ${req.header("age")}`);
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
