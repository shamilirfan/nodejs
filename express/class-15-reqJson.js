"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var port = 3000;

app.post("/", (req, res) => {
  var data = req.body;
  var string = JSON.stringify(data);

  res.send(string);
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
