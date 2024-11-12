const  {Schema, model}= require ("mongoose");
const commentSchema = new Schema ({
    comment :String,
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
const Comment = model("Comment",commentSchema)



module.exports = {Comment}