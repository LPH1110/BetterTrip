const Users = require("../models/Users");
const bcrypt = require("bcrypt");

class UserController {
  index(req, res, next) {
    res.json("Users applied");
  }

  // [POST] /store
  async store(req, res, next) {
    try {
      const { email, password } = req.body;
      const hash = await bcrypt.hash(password, 10);
      const obj = {
        email,
        password: hash,
        thumbnail:
          "https://scontent.fsgn13-2.fna.fbcdn.net/v/t31.18172-1/16300181_1236917359689996_3686774655672229040_o.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=WqnSz2VvO40AX-6QolQ&_nc_oc=AQksAA6kRo_AflmZRMag9Vdx0OFElqBBevZeTO603x3Xyd647bxw6roblKjb3rflxYk&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8tGDGGIbaXl5sAh-Mt5aUu0qVS5KoORJIHnKhI_zuFOQ&oe=6374457E",
      };
      const user = new Users(obj);
      const result = await user.save();
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  // [POST] "/login"
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result) {
          res.json({ status: "success" });
        } else {
          res.json({ status: "failed", error: "WRONG PASSWORD!" });
        }
      } else {
        res.json("User doesn't exist");
      }
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
