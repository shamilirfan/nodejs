"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.download("image-1.webp");
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
