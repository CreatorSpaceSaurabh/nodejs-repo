class UserService {
  async getUserList(data, next) {
    try {
    } catch (error) {
      next(error.message);
    }
  }
}
module.exports = new UserService();
