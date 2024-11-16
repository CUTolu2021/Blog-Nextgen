const  {Schema, model}= require ("mongoose");
const ratingSchema = new Schema ({
    rating :{
        type: Number,
        required:true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User" ,
        required:true   
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: "Blog",
        required:true
    },

},{     
    timestamps:true,
})
const Rating = model("Rating",ratingSchema)



module.exports = Rating