const route = require("express").Router({ mergeParams: true });
const payementController = require("../controller/payment.controller");

class Route {
  constructor() {
    this.route = route;
    this.controller = payementController;
  }

  useRoute() {
    this.postRoutes();
  }

  postRoutes() {
    this.route.post("/createOrder", (req, res, next) => {
      this.controller.createOrder(req, res, next);
    });

    this.route.post("/verifyPayment", (req, res, next) => {
      this.controller.createOrder(req, res, next);
    });
  }
}
module.exports = new Route().route;
