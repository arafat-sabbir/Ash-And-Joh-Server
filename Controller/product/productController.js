const ProductModal = require("../../model/productModal");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const addProduct = async (req, res) => {
  const sidebarImageCloseResultPromise = new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "companyInfo" }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      })
      .end(req.files.sidebarImageClose[0].buffer);
  });

  const [sidebarImageCloseResult] = await Promise.all([
    sidebarImageCloseResultPromise,
  ]);

  console.log(sidebarImageCloseResult, "image");

  const {
    productName,
    description,
    price,
    fabrics,
    gender,
    availableSize,
    productImages,
  } = req.body;

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
    const result = await ProductModal.find();
    res
      .status(200)
      .json({ message: "Product Data Fetched Successfully", data: result });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await ProductModal.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Product Deleted SuccessFully" });
  } catch (err) {
    res.status(500).json({ message: "Product Deleted UnsuccessFul" });
  }
};

module.exports = { addProduct, getAllProduct, deleteProduct, upload };
