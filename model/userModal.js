const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    userEmail: {
      type: String,
      required: true,
    },
    hashedPassword: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
