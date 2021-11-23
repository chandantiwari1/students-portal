const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
            unique:true,
        },
        desc:{
            type:String,
            required:true,
        },
        categories:{
            type:Array,
            required:false,
        },
        noticelink:{
            type:String,

        }
    },
    {timestamps:true}
);

module.exports = mongoose.model("Notifications",NotificationSchema);