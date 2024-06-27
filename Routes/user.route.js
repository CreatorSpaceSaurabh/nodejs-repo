const express = require("express");
const route = express.Router({ mergeParams: true });

class Routes {
  constructor() {
    this.route = route;
    this.useRoute();
  }

  useRoute() {
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.route.get("/list", (req, res, next) => {
      console.log("Users list route hitted");
      res.send("Users list route hitted");
    });
  }

  postRoutes() {}

  putRoutes() {}

  deleteRoutes() {}
}
module.exports = new Routes().route;
