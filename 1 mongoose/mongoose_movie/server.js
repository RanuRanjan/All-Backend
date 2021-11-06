const express =require("express");
const mongoose=require("mongoose");

const connect =()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/entertainment")

}

// create a schema for entertainment
const movieSchema= new mongoose.Schema({
    id:{type:Number,required:true},
    movie_name:{type:String,required:true},
    last_name:{type:String,required:true},
    budget:{type:String,required:true},
    production_year:{type:String,required:false}
})

//connect the Schema to the movie collection
const Movie= mongoose.model("movie",movieSchema);


const app=express();
app.use(express.json());


// ------------------CRUD APIS-------------------

// post any movie
app.post("/movies",async (req,res)=>{
    const movies =await Movie.create(req.body)
    return res.status(201).send({movies})
})

// get all movies
app.get("/movies",async (req,res)=>{
    const movies =await Movie.find().lean().exec()
    return res.status(200).send({movies})
})

// get single movie

app.get("/movie/:id",async(req,res)=>{
    const movie= await Movie.findById(req.params.id).lean().exec()
    return res.status(200).send({movie})
})

// update or patch

app.patch("/movie/:id",async(req,res)=>{
    const movie= await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
    return res.status(200).send({movie})
})

// delete any data
app.delete("/movie/:id",async(req,res)=>{
    const movie= await Movie.findByIdAndDelete(req.params.id)
    return res.status(200).send({movie})
})


app.listen(2165,async function(){
    await connect();
    console.log("listen to port 2165");
})