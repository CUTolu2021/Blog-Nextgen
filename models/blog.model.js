const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    title : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true   
    },
    image : String,
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"        
    },
    comments : [
        {
            type : Schema.Types.ObjectId,
            ref : "Comment"
        }
    ]
},
{
    timestamps:true
})
const Blog = model("Blog",blogSchema)

module.exports = Blog