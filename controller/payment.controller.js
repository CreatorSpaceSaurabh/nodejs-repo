const { createRazorpayInstance } = require("../config/razorpay.config");

const razorpayInstance = createRazorpayInstance();
class PaymentController {
  /**
   * @summary create order
   * @body req.body
   * @date 20 July 2024
   */

  async createOrder(req, res, next) {
    try {
      // don't accept amount from client
      const { courseId } = req.body;
      // courseId is used to fetch coursedata
      const amount = 200; //for demo purpose, which will be replaced by course amount in DB

      // create an order
      const options = {
        amount: amount * 100, // amount in smallest currency unit
        currency: "INR",
        receipt: "receipt_order_1",
      };

      razorpayInstance.orders.create(options, (err, order) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Something went wrong",
          });
        }
        return res.status(200).json(order);
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
      next(error.message);
    }
  }
}

module.exports = new PaymentController();
