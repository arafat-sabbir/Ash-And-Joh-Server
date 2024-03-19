const express = require("express");
const router = express.Router();

const authRoutes = require("./route/auth/authroutes");
const userRoutes = require("./route/user/userroutes");
const cartRoutes = require("./route/cart/cartRoutes");
const productRoutes = require("./route/products/productRoutes");

// user Auth Route

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
