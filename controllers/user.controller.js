const User = require("../models/user.model");
const {
     getAll,
      getOne,
      createOne,
      deleteOne,
      updateOne

     } = require("./generic.controllers");

const createUser = createOne(User, "User");
const getAllUser = getAll(User);
const getUser =  getOne( User,"User")
const deleteUser = deleteOne (User,"User")
const updateUser = updateOne(User, "User")

module.exports = {
    createUser,
    getAllUser,
    getUser,
    deleteUser,
    updateUser
}