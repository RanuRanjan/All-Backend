
const mongoose=require("mongoose")
// crate tags schema 
  
const tagSchema=new mongoose.Schema({

    name:{type:String,required:true},
  
    
},{
    versionKey:false,
    timestamps:true
}
)

//connect tag
module.exports=mongoose.model("tag",tagSchema)