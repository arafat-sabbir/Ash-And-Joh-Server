const { sign } = require("jsonwebtoken");
require("dotenv").config();

const createTokens = (user) => {
  const { userEmail } = user;
  const accessToken = sign(
    { userEmail},
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return accessToken;
};

module.exports = { createTokens };
