import { mongo } from "mongoose";

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // References the 'User' collection, representing the user associated with the student (could be a student or teacher)
    required: true,
  },
  name: {
    type: String,
    required: true, // Name of the student, required field
  },
  age: {
    type: Number,
    required: true, // Age of the student, assuming the school enforces age restrictions based on grade
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Grade", // References the 'Grade' collection, representing the student's grade level
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
