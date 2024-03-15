const { sign } = require("jsonwebtoken");
require("dotenv").config();

const createTokens = (user) => {
  const { userEmail, _id } = user;
  const accessToken = sign({ userEmail, _id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return accessToken;
};

module.exports = { createTokens };
