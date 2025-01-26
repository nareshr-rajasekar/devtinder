const User = require("../models/userSchema");
const { SELECT_SAFE_DATA, jwtSecretKey } = require("../utils/constants");
const jwt = require("jsonwebtoken");
const authGuard = async (req, res, next) =>{

    const {token} = req.cookies;
    const {_id} = await jwt.verify(token, jwtSecretKey)
    if(!_id){
        throw new Error("Invalid User")        
    }

    const user = await User.findOne({
        _id
    }).select(SELECT_SAFE_DATA)

    if(!user){
        throw new Error("User does not exists")  
    }
   

    req.user = user
    next()
}

module.exports = {authGuard}