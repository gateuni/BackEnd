const express = require("express");
const cors = require("cors");
const Admin = require("./AdminRoute");
const Teacher = require("./TeacherRoute");
const Student = require("./StudentRoute");

const server = express();
server.use(express.json());
server.use(cors());
server.use("/admin", Admin);
server.use("/student", Student);
server.use("/teacher", Teacher);

module.exports = server;
