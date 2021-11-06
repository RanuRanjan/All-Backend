const express = require("express");


//import mongoose db
const connect= require("./configs/db")

// import user schema:
const User=require("./models/user.model")

//import post schema:
const Post=require("./models/post.model")

//import comment schema:
const Comment=require("./models/comments.model")

//import tag schema:
const Tag=require("./models/tag.model")




// crud api for user import
const userController=require("./controller/user.controller")

//crud api for post
const postController=require("./controller/post.controller")

//crud api for tag
const tagController =require("./controller/tag.controller")

//crud api for comment
const commentController=require("./controller/comment.controller")


const app= express();
app.use(express.json());


//router for users,tags,comments,posts
app.use("/users",userController)
app.use("/tags",tagController)
app.use("/comments",commentController)
app.use("/posts",postController)


app.listen(2345,async function(){
    await connect();
    console.log("listening to port");
})