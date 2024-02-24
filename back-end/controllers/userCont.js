import User from "../models/userModel.js";

const detailsUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  return res.json(user);
};
const updateUser = async (req, res) => {
  const result = await User.findByIdAndUpdate(req.params.id, req.body);
  if (result) {
    res.send("Updated successfully");
  } else {
    res.send("User not found");
  }
};
const deleteUser = async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  if (result) {
    res.send("Deleted successfully");
  } else {
    res.send("User not found");
  }
};

export { detailsUser,deleteUser,updateUser };