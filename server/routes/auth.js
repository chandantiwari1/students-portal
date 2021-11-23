const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const nodemailer =require("nodemailer");

router.post("/register",async (req,res)=>{
    try{
        const email = req.body.email;
        console.log(email);
        const existinguser =await  Users.findOne({email:req.body.email});
        if(existinguser){
            return res.status(403).json("user already exist")
        }
        const newUser = new Users(
            {
               username:req.body.username,
               name:req.body.name,
               lastname:req.body.lastname,
               password:req.body.password,
               email:req.body.email,
               year:req.body.year,
               branch:req.body.branch,
            });
        const user =await  newUser.save();
        try {
            const transporter = nodemailer.createTransport({
                host:'smtp.gmail.com',
                port:587,
                secure:false,
                auth:{
                    user:'developerchandan1@gmail.com',
                    pass:'Reyansh@12345',
                },
            });
            await   transporter.sendMail({
                from :'kcc portal',
                to:`${email}`,
                subject:"User verification email template",
                html:'<a href="http://localhost:3000/" >click here to verify mail </a>'
            }).then((e)=>{
                console.log("mail has been sent also");
            })
            
        }catch(err){
            console.log(err);
        }
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err+"registration failed")
    }
});


router.post("/login", async (req,res)=>{
try{
const user = await Users.findOne({username:req.body.username});
!user && res.status(404).json("user name error");

if(req.body.password===user.password){
    const {password,...other}=user._doc;
    res.status(200).json(other);
}else {
    res.status(404).json("Password didn't mathc");
}
}catch (err){
    console.warn(err);
}

});




module.exports=router;