const bcrypt = require("bcryptjs");
const User = require("../../model/userModal");
const { createTokens } = require("../../utils/createJWT");
require("dotenv").config();

const createUser = async (req, res) => {
  try {
    const { userEmail, username, password } = req.body;
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      const accessToken = createTokens(req.body);
      return res.status(200).json({
        message: "User Already Exist",
        userData: existingUser,
        token: accessToken,
      });
    }
    let hashedPassword;
    if (password) {
      hashedPassword = bcrypt.hashSync(password, 10);
    }
    const newUser = new User({
      username,
      userEmail,
      hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      userData: newUser,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("error on userController", error);
    res.status(200).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
};
