const ProductModal = require("../../model/productModal");

const addProduct = async (req, res) => {
  const {
    name,
    description,
    brand,
    price,
    sizes,
    colors,
    material,
    gender,
    images,
  } = req.body;
  try {
    const newProduct = ProductModal({
      name,
      description,
      brand,
      price,
      sizes,
      colors,
      material,
      gender,
      images,
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

module.exports = addProduct;
