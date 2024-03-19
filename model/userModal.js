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
    cartProduct: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "carts",
      }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
