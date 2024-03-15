const User = require("../../model/userModal");

const updateUser = async (req, res) => {
  const { username, profilePicture } = req.body; 
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(
      _id,
      { username, profilePicture }, // Update username and profilePicture
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { updateUser };
