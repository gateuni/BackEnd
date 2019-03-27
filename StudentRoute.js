const StudentRoute = require("express").Router();
const db = require("./db");

StudentRoute.get("/", (req, res) => {
  res.send("got students");
});

module.exports = StudentRoute;
