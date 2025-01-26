const express = require("express")
const handleError = require("../utils/error")
const { validateSignUpData } = require("../utils/validation")
const User = require("../models/userSchema")
const { allowedSignUpFields, saltRounds, jwtSecretKey } = require("../utils/constants")
const authRouter = express.Router()
const bcrypt = require("bcrypt")
const validator = require("validator")

//api to sign up

authRouter.post("/signup", async (req, res) =>{
   try{
    //validate the req body
    validateSignUpData(req)    

    const existingEmailId = await User.findOne({
        email : req.body.email
    })

    
    
   if(existingEmailId){
    throw new Error("Email already exists")
   }
   const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
   req.body.password = hashedPassword

   const userInstance = new User()
   allowedSignUpFields.map((field) =>{
    userInstance[field] = req.body[field]
   })
    const data = await userInstance.save()

    res.json({
        message : "Signup successful", data
    })


   }catch(error){
    handleError(error, req, res)
   }
})
//api to login
authRouter.post("/login", async (req, res) =>{
    try{
        //validate the req body
        //check if the email exists
        //check the password

        const isEmail = validator.isEmail(req.body.email)
        if(!isEmail){
            throw new Error("Email Id is not valid")
        }

        const existingUser = await User.findOne({
            email : req.body.email
        })

        if(!existingUser){
            throw new Error("Invalid credentials")
        }

        const isPasswordSame = await existingUser.comparePassword(req.body.password)
        if(!isPasswordSame){
            throw new Error("Invalid credentials")
        }
        //create token

        const token = await  existingUser.getJwt()  

        res.cookie('token', token)


        res.json({
            message : "Login successful"
        })
    }catch(error){
        handleError(error, req, res)
    }
})
//api to forgot passowrd
//api to log out

authRouter.get("/logout", async (req, res) =>{
    try{
        res.cookie('token', null, {
            expires : new Date(new Date())
        })

        res.json({
            message : "logged out successfully"
        })
    }catch(error){
        handleError(error, req, res)
    }
})


module.exports = authRouter;