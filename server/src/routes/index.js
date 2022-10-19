const userRouter = require("./users");

function routes(app) {
  app.use("/auth", userRouter);
}

module.exports = routes;
