const Users = require("../models/Users");

class UserController {
  index(req, res, next) {
    res.json("Users applied");
  }
}

module.exports = new UserController();
