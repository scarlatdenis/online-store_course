const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res, next) {
    const { id } = req.query; //with query we can take request string parameters
    res.json(id);
    if (!id) {
      return next(ApiError.badRequest("Id is missing"));
    }
  }
}

module.exports = new UserController();
