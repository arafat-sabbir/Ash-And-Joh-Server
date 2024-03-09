const express = require("express");
const router = express.Router();

const authRoutes = require("./route/auth/authroutes");

// user Auth Route

router.use("/auth", authRoutes);

module.exports = router;
