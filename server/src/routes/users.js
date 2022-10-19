const express = require("express");
const userRouter = express.Router();
const UserController = require("../app/controllers/UserController");

userRouter.post("/login", UserController.login);
userRouter.post("/store", UserController.store);

module.exports = userRouter;
