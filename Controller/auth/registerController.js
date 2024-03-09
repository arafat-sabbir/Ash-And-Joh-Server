const bcrypt = require("bcryptjs");
const User = require("../../model/userModal");
require("dotenv").config();

const createUser = async (req, res) => {
  try {
    const { userEmail, username, password } = req.body;
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(500).json({ message: "User Already Exist" });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log("hashed password", hashedPassword);
    const newUser = new User({
      username,
      userEmail,
      hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      data: newUser,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("error on userController", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
};
