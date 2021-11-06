const express=require("express");

const router =express.Router()

// import user schema:
const User=require("../models/user.model")

//import post schema:
const Post=require("../models/post.model")

// ------------------Crud Api---------------------------//

//post
router.post("",async (req,res)=>{
    const user=await User.create(req.body)
    return res.status(201).send({user})
})

router.get("/:id/posts",async(req,res)=>{
    const posts=await Post.find({authour:req.params.id}).populate("authour").lean().exec()
    return res.status(200).send({posts})
})

//get all
router.get("/:id",async (req,res)=>{
    const user =await User.findById(req.params.id).lean().exec()
    return res.status(200).send({user})
})


router.get("",async (req,res)=>{
    const users =await User.find().lean().exec()
    return res.status(200).send({users})
})

// get one by id

//patch
router.patch("/:id",async (req,res)=>{
    const user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({user})
})

// delete
router.delete("/:id",async (req,res)=>{
    const user =await User.findByIdAndDelete(req.params.id)
    return res.status(200).send({user})
})


module.exports=router;