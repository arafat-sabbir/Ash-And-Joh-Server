const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: { type: String, Required: true },
  description: { type: String, Required: true },
  brand: { type: String, Required: true },
  price: { type: Number, Required: true },
  sizes: { type: String, Required: true },
  colors: { type: String, Required: true },
  material: { type: String, Required: true },
  gender: { type: String, enum: ["male", "female"] },
  images: [{ type: String }],
});

const ProductModal = mongoose.model("products", productSchema);

module.exports = ProductModal;
