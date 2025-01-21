const mongoose = require("mongoose")

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://nareshrrajasekar:QGuVdww8cDImD72G@namastenode.wsbqs.mongodb.net/devtinder")
}


module.exports = connectDB