const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const investSchema = Schema({
    user: [{type:mongoose.Types.ObjectId, ref:'User' }],
    amount:{type:Number,required:true},
    plan:{type:String,required:true},
    roi:{type:Number,required:true},
    returns:{type:Number,required:true}
},{
    timestamps:true,
});

const Invest = mongoose.model("Invest",investSchema)
module.exports = Invest;