const express = require("express");
const cors = require("cors");
const Admin = require("./AdminRoute");

const server = express();
server.use(express.json());
server.use(cors());
server.use("/admin", Admin);

module.exports = server;
