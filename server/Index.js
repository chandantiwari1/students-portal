const express = require('express');
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const notRoute = require("./routes/notification")
const mongoose = require("mongoose");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const cors = require("cors");
dotenv.config();

app.use(express.json());//used for json parsigng
app.use(cors());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(console.log("connection has established"))
.catch((err)=>{
    console.log(err+"in mongodb connection")
})

app.use("/kccportal/auth/", authRoute);
app.use("/kccportal/notifications",notRoute );
app.use("/kccportal/conversations", conversationRoute);
app.use("/kccportal/messages", messageRoute);

app.listen(8800,()=>{
    console.log("running on the port 8800");
});
