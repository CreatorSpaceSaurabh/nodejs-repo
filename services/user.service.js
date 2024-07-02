const { userModel } = require("../models");
const utils = require("../utils/util");
class UserService {
  async getUserList(data, next) {
    try {
      const usersList = await utils.findAllRecords(
        userModel,
        { status: "ACTIVE" },
        { name: 1, email: 1, address: 1 }
      );
      return {
        success: usersList.length,
        data: usersList,
        message: usersList.length
          ? "Userlist fetched success"
          : "No data found",
      };
    } catch (error) {
      next(error.message);
    }
  }
}
module.exports = new UserService();
