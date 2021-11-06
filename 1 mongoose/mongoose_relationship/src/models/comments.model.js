const mongoose=require("mongoose")

// create comment  scheme
const commentSchema=new mongoose.Schema({
    body:{type:String,required:true},
    postId:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true}
   
},{
    versionKey:false,
    timestamps:true
}
)

// connect post comment

module.exports =mongoose.model("comment",commentSchema)