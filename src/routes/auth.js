const express = require("express")
const handleError = require("../utils/error")
const authRouter = express.Router()

//api to sign up

authRouter.post("/signup", (req, res) =>{
   try{
    //validate the req body
   }catch(error){
    handleError(error, req, res)

   }
})
//api to login
//api to forgot passowrd
//api to log out


module.exports = authRouter;