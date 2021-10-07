const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'user' },
    fullname:{type:String,required:true},
    emailaddress:{type:String,required:true,unique:true,minlength:3},
    phoneNum:{type:String,required:true},
    gender:{type:String,required:true},
    date: { type: Date, required: true },
    address:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true}
},{
    timestamps:true,
});

const Profile = mongoose.model("profile",profileSchema)
module.exports = Profile;