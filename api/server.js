const express = require("express");

const AccountRouter = require("../accounts/accounts-router.js");



const server = express();

server.use(express.json());

server.use("/api/accounts", AccountRouter);

module.exports = server;
