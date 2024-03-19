const express = require("express");
const {
  addToCart,
  getCartProduct,
  deleteProduct,
} = require("../../Controller/cart/cartController");
const checkLogin = require("../../Middlewares/checkLogin");
const router = express.Router();

router.put("/addToCart", checkLogin, addToCart);
router.get("/getCartProduct", checkLogin, getCartProduct);
router.delete("/deleteProduct/:id", checkLogin, deleteProduct);
module.exports = router;
