const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

class UserController {
  index(req, res, next) {
    res.json("Users applied");
  }

  // [POST] /store
  async store(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (user !== null) {
        res.json({ error: "Email is already existed!" });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const obj = {
          email,
          password: hash,
          thumbnail:
            "https://scontent.fsgn13-2.fna.fbcdn.net/v/t31.18172-1/16300181_1236917359689996_3686774655672229040_o.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=WqnSz2VvO40AX-6QolQ&_nc_oc=AQksAA6kRo_AflmZRMag9Vdx0OFElqBBevZeTO603x3Xyd647bxw6roblKjb3rflxYk&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8tGDGGIbaXl5sAh-Mt5aUu0qVS5KoORJIHnKhI_zuFOQ&oe=6374457E",
        };
        const newUser = new Users(obj);
        const result = await newUser.save();
        res.json(result);
      }
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
          const accessToken = sign(
            { email: user.email, id: user._id },
            process.env.SECRET_KEY
          );
          res.json({ accessToken });
        } else {
          res.json({ error: "WRONG PASSWORD!" });
        }
      } else {
        res.json({ error: "User doesn't exist" });
      }
    } catch (e) {
      next(e);
    }
  }

  // [GET] /authen
  authen(req, res, next) {
    res.json(req.user);
  }
}

module.exports = new UserController();
