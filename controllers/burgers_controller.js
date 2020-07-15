
// Controller essentially sets all of the server routes for the get, post put stuff from burgers.js
// In this you set the route for each one, run the corresponding orm function and res.render
// Send the object received to index.handlebars file so it renders each list
const express = require("express");
const app = express();

const orm = require("../config/orm.js");

app.get("/", function (req, res) {
  orm.selectAll("burgers", function (res) {
    console.log(res);
    res.render("index");
  });
});

app.post("/api/burger", function (req, res) {
  console.log(req.body);
  // orm.insertOne("burgers", "burger_name", req.body)
});

app.put("api/burger/:id", function (req, res) {});

module.exports = app;
