const express=require("express")

const router =express.Router()

const Comment=require("../models/comments.model")


//******************crud api for comments************************* */

router.post("",async(req,res)=>{
    const comment =await Comment.create(req.body)
    return res.status(201).send({comment})
})

router.get("/:id",async(req,res)=>{
    const comment= await Comment.findById(req.params.id).lean().exec()
    return res.status(200).send({comment})
    
 })


router.get("",async(req,res)=>{
    const comment =await Comment.find().lean().exec()
    return res.status(200).send({comment})
})



router.patch("/:id",async (req,res)=>{
    const comment = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({comment})
})

router.delete("/:id",async(req,res)=>{
    const comment =await Comment.findByIdAndDelete(req.params.id)
    return res.status(200).send({comment})
    
})

module.exports=router;