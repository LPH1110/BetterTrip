const userRouter = require("./users");

function routes(app) {
  app.use("/users", userRouter);
}

module.exports = routes;
