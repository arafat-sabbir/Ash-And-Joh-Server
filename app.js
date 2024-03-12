const express = require("express");
const router = express.Router();

const authRoutes = require("./route/auth/authroutes");
const userRoutes = require("./route/user/userroutes");

// user Auth Route

router.use("/auth", authRoutes);
router.use(userRoutes);

module.exports = router;
