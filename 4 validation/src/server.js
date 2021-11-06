const express =require('express')

const connect=require("./config/db")

const usersController=require("./controller/user.Controller")

const app=express();
app.use(express.json())

app.use("/users",usersController)

const start =async () => {
    await connect();

    app.listen(3000,()=>{
        console.log("listening on port 3000");
    });
};

module.exports=start;