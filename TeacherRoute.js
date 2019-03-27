const TeacherRoute = require("express").Router();
const db = require("./db");

TeacherRoute.get("/", (req, res) => {
  res.send("Got teacher route");
});

module.exports = TeacherRoute;
