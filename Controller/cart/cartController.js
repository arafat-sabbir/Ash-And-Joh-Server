// Assuming your user model is in 'models' directory

const CartModal = require("../../model/cartModal");
const User = require("../../model/userModal");

const addToCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    // Find the user by userId
    await CartModal.create(req.body);
    const user = await User.findById(userId);

    // Check if cartProduct array exists, if not, create it
    if (!user.cartProduct) {
      user.cartProduct = [];
    }

    // Push productId to cartProduct array
    user.cartProduct.push(productId);

    // Save the updated user
    await user.save();

    return res
      .status(200)
      .json({ message: "Product added to cart successfully", userData: user });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getCartProduct = async (req, res) => {
  try {
    const { userData } = req;

    const cartProduct = await CartModal.find({
      userId: userData._id,
    }).populate("productData");
    res
      .status(200)
      .json({ message: "Cart Data Fetched Successful", cartProduct });
  } catch (err) {
    res.status(500).json({ message: "Error fetching The CartProduct", err });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await CartModal.findByIdAndDelete({ _id: id });
  res.status(200).json({message:"Product Deleted SuccessFully"})
};

module.exports = {
  addToCart,
  getCartProduct,
  deleteProduct
};
