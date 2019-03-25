const StudentRoute = require("express").Router();

StudentRoute.get("/", (req, res) => {
  res.send("got students");
});

module.exports = StudentRoute;
