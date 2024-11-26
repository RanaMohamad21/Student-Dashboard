import mongoose from "mongoose";
import dotenv from "dotenv";
import getErrorMessage from "../utils/getErrorMessage";
import process from "process";
dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(`MongoDB connected successfully on ${connection.connection.host}!`);
  } catch (error) {
    getErrorMessage(error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
