const handleError = (error, req, res)=>{
    res.status(400).send("Error : " + error.message)
}

module.exports = handleError