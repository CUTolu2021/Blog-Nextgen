const Blog = require("../models/blog.model");

// Get all from db
const getAll = (Model) => async (req, res) => {
  try {
    const data = await Model.find();
    res.json({
      status: "success",
      message: "Data retrieved successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message ? err.message : "Internal Server error",
    });
  }
};

//Create One
const createOne = (Model, name) => async (req, res) => {
  try {
    const data = await Model.create(req.body);
    res.status(201).json({
      status: "success",
      message: `${name} created successfully`,
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err.message ? err.message : "Internal Server error",
    });
  }
};

// Get By Id
const getOne = (Model, name) => async (req, res) => {
  try {
    let data;
    //Populate not working
    if (Model === Blog) {
      console.log("Blog");
      data = await Model.findById(req.params.id)
        .populate("Comments")
        .populate("Ratings");
      console.log(data);
    } else {
      data = await Model.findById(req.params.id);
    }
    if (!data) {
      return res.status(404).json({
        status: "failure",
        message: `${name} with id ${req.params.id} not found`,
      });
    }
    res.json({
      status: "success",
      message: "Data retrieved successfully",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err.message ? err.message : "Internal Server error",
    });
  }
};

// Update By Id
const updateOne = (Model, name) => async (req, res) => {
  try {
    const updatedData = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({
        status: "failure",
        message: `${name} with id ${req.params.id} not found`,
      });
    }
    res.json({
      status: "success",
      message: "Data retrieved successfully",
      updatedData,
    });
  } catch (err) {
    return res.status(500).json({
      status: "failure",
      message: err.message ? err.message : "Internal Server error",
    });
  }
};

const deleteOne = (Model, name) => async (req, res) => {
  try {
    const deletedData = await Model.findByIdAndDelete(req.params.id);
    if (!deletedData) {
      return res.status(404).json({
        status: "failure",
        message: `${name} with id ${req.params.id} not found`,
      });
    }
    res.json({
      message: `${name} deleted successfully`,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message ? err.message : "Internal Server error",
    });
  }
};

module.exports = {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
};
