const { Schema, model } = require("mongoose");

const userschema = new Schema({
    name : String,
    username : {type:String, unique:true, required:[true,"Username is a required field."]},
    age : Number,
    role : String,
    password : {
        type:String,
        select: false,
        required:[true,"Password is a required field."]
    },
    email : String
},
{
    timestamps:true
})
const User = model("User",userschema)



module.exports = {User}