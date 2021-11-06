const mongoose=require('mongoose')
const bcryptjs =require("bcryptjs")

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:8, maxLength:20},
},
  {
      versionKey:false,
      timestamps:true

  }
)
// hooks =fishing 
//create and update
userSchema.pre("save",function (next){
   if(!this.isModified("password"))
    return next();

   const hash=bcryptjs.hashSync(this.password,8)  //number means no of time hashing
   this.password=hash
   next();

})

userSchema.methods.checkPassword=function(password){
  const match=bcryptjs.compareSync(password,this.password)
  return match
}

const User =mongoose.model("user",userSchema);

module.exports=User;