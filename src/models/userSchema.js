const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema(
    {
        firstName : {type : String,
            trim : true,
            maxLength : 100
            
        },
        lastName : {type : String,
            trim : true,
            maxLength : 100
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
            String,
            maxLength : 100
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

    const User = new mongoose.Model('User', userSchema)

    module.exports = User