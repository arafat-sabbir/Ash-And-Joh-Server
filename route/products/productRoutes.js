const express = require("express");
const {
  addProduct,
  getAllProduct,
} = require("../../Controller/product/productController");
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/getAllProduct", getAllProduct);
module.exports = router;
