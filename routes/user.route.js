const express = require("express");
const {
  createUser,
  getUser,
  getAllUser,
  deleteUser,
  updateUser,
  signIn,
  sameUser,
} = require("../controllers/user.controller");
const hashPassword = require("../middleware/hashPassword");
const { verifyJWTAuthToken } = require("../middleware/authFunctions");

const userRouter = express.Router();

userRouter.route("/").get(getAllUser).post(hashPassword, createUser);

userRouter
  .route("/:id")
  .get(getUser)
  .patch(verifyJWTAuthToken, sameUser, updateUser)
  .delete(verifyJWTAuthToken, sameUser, deleteUser);

userRouter.route("/signin").post(signIn);

module.exports = userRouter;
