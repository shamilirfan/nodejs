"use strict";
var express = require("express");
var port = 3000;
var multer = require("multer");
var multer = multer();
var app = express();
app.use(multer.array());
app.use(express.static("public"));

app.post("/", (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
