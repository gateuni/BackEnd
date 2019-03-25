const AdminRoute = require("express").Router();

AdminRoute.get("/", (req, res) => {
  res.send("Got the admin");
});

module.exports = AdminRoute;
