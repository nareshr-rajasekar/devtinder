const express = require("express");
const userRouter = express.Router();
const { jwtSecretKey } = require("../utils/constants");
const handleError = require("../utils/error");
const User = require("../models/userSchema");

//api to view profile
userRouter.get('/profile', async (req, res) =>{
    try {
        const user = req.user;
        res.status(200).json({
            message : "Profile fetched successfully",
            data : user
        })
    } catch (error) {
        handleError(error, req, res)
    }

})
//api to mutual connections
//api to view received requests
//api to feed

module.exports = userRouter;