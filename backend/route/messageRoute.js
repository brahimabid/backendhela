const {Message}=require('../Model/message')
const express=require('express')
const router=express.Router()

router.post('/newMessage', async (req,res)=>{
const resultat=await Message.find({prof:req.body.prof})
console.log(resultat)
if(!resultat  || resultat.length==0){
    counter=1
}else
{
counter=resultat.length
console.log(resultat)}
const mat=new Message({
    prof:req.body.prof,
    message:req.body.message,
    counter:counter
})

const result =await mat.save()

res.send({status:true,resultat:result})

})
router.get('/getMessages/:id',async(req,res)=>{
    const result=await Message.find({prof:req.params.id})
   .sort({counter:1})
     if(result.length==0)
     res.send({status:false})
    res.send({status:true,resultat:result})
})
module.exports.routeMessage=router