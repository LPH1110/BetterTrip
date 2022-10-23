const express = require("express");
const userRouter = express.Router();
const UserController = require("../app/controllers/UserController");
const { validateToken } = require("../middlewares/Authen");

userRouter.post("/login", UserController.login);
userRouter.post("/store", UserController.store);
userRouter.use("/validate", validateToken, UserController.authen);

module.exports = userRouter;
