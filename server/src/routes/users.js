const express = require("express");
const userRouter = express.Router();
const UserController = require("../app/controllers/UserController");

userRouter.use("/", UserController.index);

module.exports = userRouter;
