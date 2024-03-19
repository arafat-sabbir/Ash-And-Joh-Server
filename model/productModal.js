const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  productName: { type: String, Required: true },
  description: { type: String, Required: true },
  fabrics: { type: String, Required: true },
  price: { type: Number, Required: true },
  availableSize: [{ type: String, Required: true }],
  gender: { type: String},
  productImages: [{ type: String }],
});

const ProductModal = mongoose.model("products", productSchema);

module.exports = ProductModal;
