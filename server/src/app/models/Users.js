const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    username: { type: String },
    password: { type: String },
    avatar: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", Users);
