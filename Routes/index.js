const express = require("express");
const Router = express.Router({ mergeParams: true });
// const userRoutes = require("./user.route");

Router.use("/user", require("./user.route"));

Router.use("/payment", require("./payment.route"));

module.exports = Router;
