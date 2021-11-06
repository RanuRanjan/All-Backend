const express=require('express')

const {signUp,signIn}=require("./controller/auth.controller")
const postController=require("./controller/product.controller")
const app=express();

app.use(express.json())

app.post("/signUp",signUp);
app.post("/signIn",signIn);
app.use("/post",postController)


module.exports=app;