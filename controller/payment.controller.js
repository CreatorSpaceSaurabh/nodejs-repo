const { createRazorpayInstance } = require("../config/razorpay.config");
const crypto = require("crypto");
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
      //   next(error.message);
    }
  }

  /**
   * @summary verify payment
   * @body req.body
   * @date 20 July 2024
   */
  async verifyPayment(req, res, next) {
    try {
      const { order_id, payment_id, signature } = req.body;

      const secret = process.env.RAZORPAY_KEY_SECRET;
      // create hmac object
      const hmac = crypto.createHmac("sha256", secret);
      hmac.update(order_id + "|" + payment_id);

      // generate signature
      const generatedSignature = hmac.digest("hex");

      if (generatedSignature === signature) {
        // db operation , data updation
        return res.status(200).json({
          success: true,
          message: "Payment verified",
        });
      } else {
        return res.status(400).json({
          success: true,
          message: "Payment not verified",
        });
      }
    } catch (error) {
      return next(error.message);
    }
  }
}

module.exports = new PaymentController();
