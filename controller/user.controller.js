const { userService } = require("../services");

class UserController {
  async getUserList(req, res, next) {
    try {
      const usersList = await userService.getUserList(req, next);
      if (usersList.length) {
        res.status(200).send({
          success: true,
          message: "Users list fetched successfully",
          data: usersList,
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Error while fetching users list",
          data: usersList,
        });
      }
    } catch (error) {
      next(error.message);
    }
  }
}
module.exports = new UserController();
