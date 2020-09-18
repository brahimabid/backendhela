const mongoose=require('mongoose')
const Joi=require('joi');

const schemaMessage=mongoose.Schema({
    prof:{type:mongoose.Types.ObjectId,ref:'User'},
    message:{type:String,required:true},
    counter:Number
})

const Message=mongoose.model("Message",schemaMessage)


module.exports.Message=Message