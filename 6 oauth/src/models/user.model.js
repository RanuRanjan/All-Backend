const mongoose=require('mongoose')
const bcryptjs =require("bcryptjs")

const userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:8, maxLength:100},
    roles:[{type:String,required:true}]
},
  {
      versionKey:false,
      timestamps:true

  }
)
// hooks =fishing 
//create and update

// Authenticate
userSchema.pre("save",function (next){
   if(!this.isModified("password"))
    return next();

   const hash=bcryptjs.hashSync(this.password,8)  //number means no of time hashing
   this.password=hash
   next();

})
// singh  == fdfhgkhdfkdhgkdjhgkdhfg

userSchema.methods.checkPassword=function(password){
  const match=bcryptjs.compareSync(password,this.password)
  return match
}

const User =mongoose.model("user",userSchema);

module.exports=User;