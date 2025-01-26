const { allowedSignUpFields } = require("./constants")

const validateSignUpData = (req) =>{
    
    const data = Object.keys(req.body)    
    const isAllowed = allowedSignUpFields.every((field) => data.includes(field))
    if(!isAllowed){
       throw new Error("Required Fields missing") 
    }
    
}

module.exports = {validateSignUpData}