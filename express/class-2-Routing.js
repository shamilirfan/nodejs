"use strict";
var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.send("Home Page with get method");
});

app.post("/about", (req, res) => {
  res.send("About page with post method");
});

app.put("/contact", (req, res) => {
  res.send("Contact page with put method");
});

app.delete("/profile", (req, res) => {
  res.send("Profile page with delete method");
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
