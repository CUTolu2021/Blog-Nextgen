const Blog = require("../models/blog.model");

// Get all from db
const getAll = (Model) => async (req, res) => {
  try {
    const info = Model.find();
    const data = await info.limit(req.query.limit)
  .skip(req.query.skip*req.query.limit)
  .sort(req.query.sort);
  const totalCount = await Model.countDocuments();
    res.json({
      status: "success",
      message: "Data retrieved successfully",
      data,
      totalCount
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
    if(Model === Blog){
      console.log("Blog");
      data = await Model.findById(req.params.id).populate("comments").populate("ratings");
    }
    else{
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

const createOneAndUpdateBlog =(Model,name)=> async (req, res) => {
  try {
    const data = await Model.create(req.body);
    if(name.toLowerCase() === "comment"){
      await Blog.findByIdAndUpdate(req.body.blog, { $push: { comments: data._id } }, { new: true })
    }
    else if(name.toLowerCase() === "rating"){
      await Blog.findByIdAndUpdate(req.body.blog, { $push: { ratings: data._id } }, { new: true })
    }
     res.status(201).json({
      status: "success",
      message: `${name} created successfully`,
      data
    });
        
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

const getRatingAndCommentByBlog = (Model,name) => async (req, res) => {
  const getData =  Model.find({ blog: req.params.blogId })
  const data = await getData.limit(req.query.limit)
  .skip(req.query.skip*req.query.limit)
  .sort(req.query.sort);
  const totalCount = await Model.countDocuments({ blog: req.params.blogId });
  
  res.json({
      status: "success",
      data,
      message:`Total number of ${name} is ${totalCount}.`
  }
  );
}

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
  createOneAndUpdateBlog,
  getRatingAndCommentByBlog
};