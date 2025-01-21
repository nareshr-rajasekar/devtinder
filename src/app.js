const express = require("express")
const connectDb =require('./config/database')
const userRouter = require("./routes/user")
const requestRouter = require("./routes/request")
const authRouter = require("./routes/auth")

const app = express()
app.use(express.json())

app.use("/user", userRouter)
app.use("/request", requestRouter)
app.use("/auth", authRouter)





connectDb().then(() =>{
    console.log("DB connected successfully");
    
    app.listen(7777, () =>{
        console.log("App is listening successfully");
        
    })
}).catch(error => console.log("Database error"+ error))
