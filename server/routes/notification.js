const router = require("express").Router();
const Notifications = require("../models/Notifications");
const Users = require("../models/Users");

//creating notifications
router.post("/",async (req,res)=>{
    const newNotification = new Notifications(req.body);
    try{
        const savedNotification = await newNotification.save();
        res.status(200).json(savedNotification);
    }catch (err){
        res.status(500).json(err+"error in creating notifications");
    }
});

// getting all notifications
router.get("/:id", async (req,res)=>{
    try{
        const notifications = await Notifications.findById(req.params.id);
        res.status(200).json(notifications);
    }catch (err){
        res.status(500).json(err);
    }
});

// getting all notifications
router.get("/",async (req,res)=>{
    
    try{
        let notices;
        
            notices = await Notifications.find();
        res.status(200).json(notices);
    }catch (err){
        res.status(500).json(err+"query error");
    }
});

module.exports = router;

