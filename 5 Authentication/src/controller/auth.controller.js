const jwt =require("jsonwebtoken")
require("dotenv").config();
const User = require("../models/user.model")


const newToken=(user)=>{
       return  jwt.sign({ user },process.env.JWT_SECRET_KEY);
}

const signUp=async (req,res)=>{
    //first check the  user email exits or not if exit then throw the error
    let user;
    try{
        user = await User.findOne({email:req.body.email})
        console.log(user)
        if(user) return res.status(400).send({message:"Please check your  email and password"})
         
        
        //if new then create the user and hash the password
        user =await User.create(req.body)

        //will create token
        const token =newToken(user) 
        return res.status(200).send({user,token});
    }
    catch(err){
        return res.status(500).send({message:"Sorry for inconvenience please try again in sometimes"})
    }

    
}


const signIn=async (req,res)=>{

    try{
   //first we will check if user with same email already exits
   let  user = await User.findOne({email:req.body.email})


//    if not we throw the error
    if(!user) return res.status(400).send({message:"Please check your  email and password"})

// if it exits we match the password
    let match=user.checkPassword(req.body.password);

// if  not  then throw the error 
    if(!match) return res.status(400).send({message:"Please check your  email and password"})

// else we create a new token for that user
// we will send token to the frontend
    const token =newToken(user) 
    return res.status(200).send({user,token});
    }
    catch(err){
        return res.status(500).send({message:"Sorry for inconvenience please try again in sometimes"})
    }   
}

module.exports={signUp,signIn}