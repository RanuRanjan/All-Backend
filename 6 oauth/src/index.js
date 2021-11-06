
const express=require('express')
const passport=require("./config/passport")

const {signUp,signIn}=require("./controller/auth.controller")
const postController=require("./controller/product.controller")
const app=express();


app.use(express.json())
app.use(passport.initialize());


passport.serializeUser(function({user,token}, done) {
    done(null, {user,token});
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
});

passport.deserializeUser(function({user,token}, done) {
//   User.findById(id, function(err, user) {
    done(err,{user,token});
//   });
});   



app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', { 
        // successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
 }),
 function (req,res){
     console.log("user",req.user) ;
     return res.status(200).send({user:req.user.user,token:req.user.token})
   
 }
);

app.post("/signUp",signUp);
app.post("/signIn",signIn);
app.use("/post",postController)


module.exports=app;