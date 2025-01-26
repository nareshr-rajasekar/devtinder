const allowedSignUpFields = ["firstName", "lastName", "email", "password", "gender", "skills", "about", "photoUrl"]
const saltRounds = 10
const jwtSecretKey = "DEVTinder@3802"
const SELECT_SAFE_DATA = ["firstName", "lastName", "email", "skills", "gender", "about", "photoUrl"]

module.exports = {
    allowedSignUpFields,
    saltRounds,
    jwtSecretKey,
    SELECT_SAFE_DATA
}