const express = require("express");
const { updateUser } = require("../../Controller/user/userController");
const router = express.Router();

router.put("/updateUserData/:id", updateUser);
module.exports = router;
