const express = require("express");
const {
  addProduct,
  getAllProduct,
  deleteProduct,
  upload,
} = require("../../Controller/product/productController");
const checkLogin = require("../../Middlewares/checkLogin");
const router = express.Router();

router.post("/addProduct",upload.fields([
  { name: 'sidebarImageClose', maxCount: 1 },
]), addProduct);
router.get("/getAllProduct", getAllProduct);
router.delete("/deleteProduct/:id", checkLogin, deleteProduct);
module.exports = router;
