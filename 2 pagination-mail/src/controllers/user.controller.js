const express=require("express");

const sendMail=require("../utils/sendmail")

const path =require("path")


const router = express.Router();

const User =require("../models/user.model")


router.get("/",async function(req,res){           //page user
    const page =  +req.query.page || 1;
    const size =  +req.query.size || 10;

    const offset= ((page - 1) * size) ; //0

    const users =await User.find().skip(offset).limit(size).lean().exec()

    const totalUserCount =await User.find().countDocuments();
    const totalPages=Math.ceil(totalUserCount/size);
    
    // console.log(path.join(__dirname,"../files/send.txt"))
    sendMail({
            from: "ranu@gmail.com",
            to: "ravi@sender.com",
            subject: "fine",
            text: "mvc project ",
            html: "<p>first mvc</p>",
            path: path.join(__dirname,"../files/send.txt"),
         
            })
            return res.send({users,totalPages});
    })

module.exports=router;