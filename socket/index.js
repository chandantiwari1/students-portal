import { Button } from "@blueprintjs/core";
<Button intent="success" text="button content" onClick={incrementCounter} />

const io = require("socket.io")(8900,{
    cors:{
        origin:"http://localhost:3000",
    },
});
console.log("servrer is running");

let users = [];

const addUser = (userId,socketId)=>{
    !users.some((user)=>user.userId===userId)&&
    users.push({userId,socketId});
};


const removeUser=(socketId)=>{
    users=users.filter((user)=>user.socketId!==socketId);
};

const getUser = (userId)=>{
    return users.find((user)=>user.userId===userId);
};

io.on("connected",(Socket)=>{
    console.log("a user connected");

    Socket.on("adduser",(userId)=>{
        addUser(userId,socket.id);
        io.emit("getUsers",users);
    });

    socket.on("sendmessage",({senderId,receiverId,text})=>{
        const user =getUser(received);
        io.to(user.socketId).emit("get message",{
            senderId,
            text,
        });
    });

    socket.on("disconnect",()=>{
        console.log("a user disconnectede!");
        removeUser(socket.id);
        io.emit("getUsers",users);
    });
});