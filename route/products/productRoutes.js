const express = require("express");
const addProduct = require("../../Controller/product/productController");
const router = express.Router();

router.post("/addProduct", addProduct);
module.exports = router;
