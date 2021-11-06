 function authorize (permissionRoles){
     return (req,res,next) =>{
        
       //user ko get karna reques kar ke

       const user =req.user;

    //    check karna hai ki koi bi  ek role user ke pass hai ya nai 

       let allowed=false
        const allowedArray=user.roles.map(role=>{
            if(permissionRoles.includes(role)){
                allowed=true
            }
        })
    // agar nai hai role toh throw error
    if(!allowed) return res.status(403).send({message:"your are not allowed"})

    return next();

     }
 }

 module.exports=authorize;