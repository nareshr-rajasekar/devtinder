const express = require("express")

const app = express()
app.use("", (req, res) =>{
    res.send("Welcome to Naresh's World")
})
app.listen(7777, () =>{
    console.log("App is listening successfully");
    
})