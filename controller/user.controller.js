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

  async getComplexOperation(req, res, next) {
    try {
      const count = await userService.getComplexQuery(next);
      if (count.data) {
        res.status(200).send({
          success: true,
          message: "Complex operation fetched success",
          data: count.data,
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Error while fetching complex operation",
          data: count.data,
        });
      }
    } catch (error) {
      next(error.message);
    }
  }
}
module.exports = new UserController();
