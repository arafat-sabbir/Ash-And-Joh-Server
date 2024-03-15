const  jwt  = require("jsonwebtoken");
const checkLogin = async (req, res, next) => {
    console.log(req.headers);
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "Unauthorized Access Request" });
  }
  const token = req?.headers?.authorization?.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Unauthorized access Detected" });
    }
    req.userData = decoded;
    console.log("from User Login", decoded);
    next();
  });
};

module.exports = checkLogin;
