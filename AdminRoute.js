const AdminRoute = require("express").Router();
const db = require("./db");

AdminRoute.get("/", (req, res) => {
  res.send("Got the admin");
});

module.exports = AdminRoute;
