const express = require("express");
const { updateUser } = require("../../Controller/user/userController");
const checkLogin = require("../../Middlewares/checkLogin");
const router = express.Router();

router.put("/updateUserData/:id", checkLogin, updateUser);
module.exports = router;
