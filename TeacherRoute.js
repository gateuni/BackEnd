const TeacherRoute = require("express").Router();

TeacherRoute.get("/", (req, res) => {
  res.send("Got teacher route");
});

module.exports = TeacherRoute;
