

const mongoose =require ("mongoose")

// create the schema for post
const postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    authour:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    tags:[{type:mongoose.Schema.Types.ObjectId,ref:"tag",required:true}],

},{
    versionKey:false,
     timestamps:true
})

// connect post schema

module.exports =mongoose.model("post",postSchema)