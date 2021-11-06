const mongoose =require ("mongoose")

const userSchema= new mongoose.Schema({
    id:{type:Number,required:false},
    first_Name:{type:String,required:true},
    last_Name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true}
})


// create collection:
const User=mongoose.model("user",userSchema);


module.exports=User;