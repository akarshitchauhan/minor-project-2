import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  try {
    const {
      fullname,
      email,
      contact,
      password,
    } = req.body;
    const user = new User({
      fullname,
      email,
      contact,
    });
    const newUser = await User.register(user, password);
    req.login(newUser, () => {
      return res.json(newUser);
    });
  } catch (err) {
    return res.json(err.message);
  }
};
const getLogin = (req, res) => {
  return res.status(401).json("Login failed");
};
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    return res.json(user);
  } catch (error) {
    return res.status(500).json("Login failed",error)
  }
};
const logoutUser = async (req, res, next) => {
  if (req.user) {
    req.logout(function () {
      return res.json("Logged Out");
    });
  } else {
    return res.status(500).json("User not logged in");
  }
};
const currentUserDetails = async (req, res) => {
  return res.status(200).json(req.user);
};

export { registerUser, loginUser, getLogin, logoutUser, currentUserDetails };