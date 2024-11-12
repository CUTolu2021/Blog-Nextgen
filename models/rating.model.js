const  {Schema, model}= require ("mongoose");
const ratingSchema = new Schema ({
    rating :Number,
    user: {
    type: Schema.Types.ObjectId,
   ref: "User"    
    },
    blog: {
        type: Schema.Types.ObjectId,
        ref: "Blog"
    },

},{ timestamps:true,
})
const Rating = model("Rating",ratingSchema)



module.exports = {Rating}