const express = require("express");
const { userController } = require("../controller");
const route = express.Router({ mergeParams: true });

class Routes {
  constructor() {
    this.route = route;
    this.userController = userController;
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
      // res.send("Users list route hitted");
      this.userController.getUserList(req, res, next);
    });
  }

  postRoutes() {}

  putRoutes() {}

  deleteRoutes() {}
}
module.exports = new Routes().route;
