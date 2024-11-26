import mongoose from 'mongoose';
const { isEmail } = require("validator");
const userSchema = new mongoose.Schema({
    email:{
        type: String,
    required: [true, "Please enter an Email."], // Custom error message
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email."],
    },
    password: {
        type: String,
        required: [true, "Please enter a password."],
        minlength: [8, "Minimum password length is 8 characters."],
      },
      createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
      userType:{
        type: String,
        enum: ["student","teacher",  "admin", "staff"],
        required: true
      }
})

export default mongoose.model("User", userSchema);