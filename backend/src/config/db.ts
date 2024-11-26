const mongoose = require("mongoose");
require("dotenv").config();
const getErrorMessage = require('../utils/getErrorMessage') 
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        getErrorMessage(error);
        // To exit the current process with failure.
        process.exit(1);
    }
}

export default connectDB;
