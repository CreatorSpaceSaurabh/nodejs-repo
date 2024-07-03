const { userService } = require("../services");

class UserController {
  async getUserList(req, res, next) {
    try {
      const usersList = await userService.getUserList(req, next);
      if (usersList.data.length) {
        res.status(200).send({
          success: true,
          message: "Users list fetched successfully",
          data: usersList.data,
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Error while fetching users list",
          data: usersList.data,
        });
      }
    } catch (error) {
      next(error.message);
    }
  }
}
module.exports = new UserController();
