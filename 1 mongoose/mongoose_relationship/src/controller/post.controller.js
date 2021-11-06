const express= require("express")

const router = express.Router()

//import post schema:
const Post=require("../models/post.model")

//import comment schema:
const Comment=require("../models/comments.model")




// *****************crud api for post*************************
router.post("",async(req,res)=>{
    const post =await Post.create(req.body)
    return res.status(201).send({post})
})

router.get("/:id",async(req,res)=>{
    const post= await Post.findById(req.params.id).lean().exec()
    return res.status(200).send({post})
    
 })


router.get("",async(req,res)=>{
    const post =await Post.find().
    populate({
        path:"authour",
        select:"first_Name"
    }).populate({
        path:"tags",
        select:"name"
    })
    .lean().exec()
    return res.status(200).send({post})
})



router.patch("/:id",async (req,res)=>{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({post})
})

router.delete("/:id",async(req,res)=>{
    const post =await Post.findByIdAndDelete(req.params.id)
    return res.status(200).send({post})
    
})

module.exports=router;