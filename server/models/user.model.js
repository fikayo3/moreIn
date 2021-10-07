const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
    emailaddress:{type:String,required:true,unique:true,},
    phoneNum:{type:String,required:true},
    passwordHash:{type:String,required:true}
},{
    timestamps:true,
});

const User = mongoose.model("user",userSchema)
module.exports = User;