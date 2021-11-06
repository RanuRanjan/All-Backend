
const mongoose =require ("mongoose")


// mongoose link :
module.exports=()=>{
    return mongoose.connect('mongodb+srv://ranu:qwerty@123@cluster0.8jz1x.mongodb.net/render?retryWrites=true&w=majority')
}