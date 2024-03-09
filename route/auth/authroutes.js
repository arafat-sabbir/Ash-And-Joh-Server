const express = require("express");
const { createUser } = require("../../Controller/auth/registerController");
const router = express.Router();

router.post("/registerUser", createUser);

module.exports = router;
