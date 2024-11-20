const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const {
  getAll,
  getOne,
  createOne,
  deleteOne,
  updateOne,
} = require("./generic.controllers");

const { createAuthenticationToken } = require("../middleware/authFunctions");

const createUser = createOne(User, "User");
const getAllUser = getAll(User);
const getUser = getOne(User, "User");
const deleteUser = deleteOne(User, "User");
const updateUser = updateOne(User, "User");

const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).select("+password");
  if (!user) {
    //return res.status(401).json({ message: "Invalid Username or Password" });
    return res.status(401).json({ message: "Invalid User" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Username or Password" });
  }
  user.password = undefined;
  console.log(user);
  req.user = user;
  createAuthenticationToken(req.user, res);
};

const sameUser = (req, res, next) => {
  const { id } = req.params;
  console.log(req.user);
  if (req.user._id !== id)
    return res
      .status(401)
      .json({ message: "You don't have control over this" });
  next();
};

//Added this function so only authors can create blogs.
const adminUser = (req, res, next) => {
  if (req.user.role === "admin" || req.user.role === "author") {
    return next();
  }
  return res.status(401).json({ message: "You are not an author" });
};

// A more generic role restriction middleware
const restrictTo = (allowedRolesArr) => (req, res, next) => {
  if (!allowedRolesArr.includes(req.user.role)) {
    res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  signIn,
  sameUser,
  adminUser,
  restrictTo,
};
