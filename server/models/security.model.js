const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const securitySchema = Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'user' },
    oldPass:{type:String,required:true},
    newPass:{type:String,required:true},
},{
    timestamps:true,
});

const Secure = mongoose.model("secure",securitySchema)
module.exports = Secure;