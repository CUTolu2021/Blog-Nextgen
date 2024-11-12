const { Schema, model } = require("mongoose");


const blogSchema = new Schema({
    title : String,
    description : String,
    image : String,
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"
        
    }
},
{
    timestamps:true
})
const Blog = model("Blog",blogSchema)

module.exports = {Blog}