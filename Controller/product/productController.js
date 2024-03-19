const ProductModal = require("../../model/productModal");

const addProduct = async (req, res) => {
  const {
    productName,
    description,
    price,
    fabrics,
    gender,
    availableSize,
    productImages,
  } = req.body;
  console.log("Form add Product", req.body);
  try {
    const newProduct = ProductModal({
      productName,
      description,
      price,
      fabrics,
      gender,
      availableSize,
      productImages,
    });
    await newProduct.save();
    res.status(200).json({
      productData: newProduct,
      message: "Product Added successfully",
    });
  } catch (err) {
    res.status(400).json({
      error: err,
      message: "Product Added Failed!",
    });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const { limit } = req.query;
    console.log(limit);
    const result = await ProductModal.find().limit(8);
    res
      .status(200)
      .json({ message: "Product Data Fetched Successfully", data: result });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { addProduct, getAllProduct };
