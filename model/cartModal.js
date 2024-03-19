const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
  size: { type: String, Required: true },
  productData: {
    type: mongoose.Schema.Types.ObjectId,
    Required: true,
    ref: "products",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    Required: true,
    ref: "users",
  },
  quantity: { type: Number, Required: true },
});

const CartModal = mongoose.model("carts", cartSchema);

module.exports = CartModal;
