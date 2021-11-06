//---------curud api for tag----------------

const express=require("express")

const Tag=require("../models/tag.model");
const crudController = require("./crud.controller");

const router=express.Router();


router.post("",crudController.post(Tag))
// router.post("",async(req,res)=>{
//     const tag =await Tag.create(req.body)
//     return res.status(201).send({tag})
// })

router.get("/:id",async(req,res)=>{
    const tag= await Tag.findById(req.params.id).lean().exec()
    return res.status(200).send({tag})
    
 })

 router.get("",crudController.get(Tag))
// router.get("",async(req,res)=>{
//     const tag =await Tag.find().lean().exec()
//     return res.status(200).send({tag})
// })



router.patch("/:id",async (req,res)=>{
    const tag = await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({tag})
})

router.delete("/:id",async(req,res)=>{
    const tag =await Tag.findByIdAndDelete(req.params.id)
    return res.status(200).send({tag})
    
})

module.exports=router;