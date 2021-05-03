class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    const query = req.query; //with query we can take request string parameters
    res.json(query);
  }
}

module.exports = new UserController();
