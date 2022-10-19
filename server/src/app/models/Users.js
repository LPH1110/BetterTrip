const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    email: { type: String },
    password: { type: String },
    thumbnail: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", Users);
