const mongoose = require("mongoose")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const {jwtSecretKey } = require("../utils/constants")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        firstName : {type : String,
            trim : true
            
        },
        lastName : {type : String,
            trim : true
        },
        email : {
            type : String,
            unique : true,
            validate : function (val) {
                if(!validator.isEmail(val)){
                    throw new Error("EmailId is not valid")
                }
            }
        },
        password : {
            type : String,
            validate : function (val){
                if(!validator.isStrongPassword(val)){
                    throw new Error("Password is not valid")
                }
            }
        },
        gender : {
            type : String,
            enum :{
                values : ['male', 'female'],
                message : '{VALUE} is not supported'
            }
        },
        skills : {type : [String]},
        about:{
           type : String
        },
        photoUrl : {
            type : String,
            validate : function(val){
                if(!validator.isURL(val)){
                    throw new Error("Photo Url is not valid")
                }
            }
        }
    },
    {
    timestamps : true
    })

    userSchema.methods.getJwt =  async function () {
        const existingUser = this
        const token =  await jwt.sign({_id : existingUser._id}, jwtSecretKey, {
            expiresIn : '7d'
        }) 
        return token
    }

    userSchema.methods.comparePassword = async function (userEnteredPassword) {
        const existingUser = this
        return await bcrypt.compare(userEnteredPassword, existingUser.password)
    }

    const User = new mongoose.model('User', userSchema)

    module.exports = User