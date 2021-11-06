const app=require("./index")

const connect=require("./config/db")

app.listen(2344 , async function (){
    await connect();
    console.log("listen to port 2345");
})