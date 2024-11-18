const bcrypt = require("bcryptjs");
const { User } = require("../models/user.model");
const {
  getAll,
  getOne,
  createOne,
  deleteOne,
  updateOne,
} = require("./generic.controllers");
const { createAuthenticationToken } = require("../middleware/auth");

const createUser = createOne(User, "User");
const getAllUser = getAll(User);
const getUser = getOne(User, "User");
const deleteUser = deleteOne(User, "User");
const updateUser = updateOne(User, "User");

// Sign in
const signIn = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Kindly provide email and password" });

  const user = await User.findOne({ username }).select("+password");
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  user.password = undefined;
  req.user = user;
  createAuthenticationToken(req.user, res);
};

module.exports = {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  signIn,
};
