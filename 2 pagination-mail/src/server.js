const express=require('express');
const connect =require('./config/db') //mongodb connection

const app=require("./index")

app.listen(3000,async function(){
    await connect();
    console.log("listening to port 3000");
})  