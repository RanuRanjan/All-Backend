const express = require("express"); //connect express js

const mongoose=require("mongoose")  //connect mongoose 

const connect=() => {
    return mongoose.connect("mongodb://127.0.0.1:27017/web11")  //connecting port
}


  // in simple language it is struture that we want to store our data base like that


// step 1 :create the schema  :
const userSchema =new mongoose.Schema({
    id:{type :Number,required:false},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    gender:{type:String,required:false},
    
})

//step 2 :connect the schema to the users collection
 
const User =mongoose.model("user",userSchema);


const app=express();
app.use(express.json());


//------------------------CRUD APIS FOR USER------------------------


// post an data or insert 
app.post("/users",async(req,res)=>{
    const user=await User.create(req.body)
    return res.status(201).send({user})

})

// status code is not madatory but it is used to that code is useful for other to understand

// get all data of users
app.get("/users",async(req,res)=>{
    const users=await User.find()
    return res.status(200).send({users})
})










// listen the port expresss
app.listen(2345,async function(){
    await connect();
    console.log("listen to port 2345");
});