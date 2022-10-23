const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (accessToken) {
    try {
      const validToken = verify(accessToken, process.env.SECRET_KEY);
      req.user = validToken;
      if (validToken) {
        return next();
      } else {
        res.json({ error: "Invalid token" });
      }
    } catch (e) {
      res.json({ error: e });
    }
  } else {
    res.json({ error: "User not logged in" });
  }
};

module.exports = { validateToken };
