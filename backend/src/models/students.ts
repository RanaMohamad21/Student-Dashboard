
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // References the 'User' collection, representing the user associated with the student (could be a student or teacher)
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true, // Name of the student, required field
    minlength: [2,"Name must be at least 2 characters long."]
},
  age: {
    type: Number,
    required: true, // Age of the student, assuming the school enforces age restrictions based on grade
  },
  grade: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Grade", // References the 'Grade' collection, representing the student's grade level
    required: true,
    unique: true
  },
  subjects:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  }]
});

export default mongoose.model("Student", studentSchema);
