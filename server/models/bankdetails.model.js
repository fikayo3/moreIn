const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bankSchema = Schema({
    user: { type: mongoose.Schema.Types.ObjectId,ref: 'user' },
    bank:{type:String,required:true},
    accName:{type:String,required:true},
    accNum:{type:String,required:true},
},{
    timestamps:true,
});

const Bank = mongoose.model("bank",bankSchema)
module.exports = Bank;