import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // References the 'User' collection, representing the user associated with the teacher (could be a student or teacher)
    required: true,
  },
  name: {
    type: String,
    required: true, // Name of the student, required field
    minlength: [2, "Name must be at least 2 characters long."],
  },
  hireDate: {
    type: Date,
    required: true,
  },
  assignedGrades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade",
      // validate: {
      //   // Ensure no duplicates
      //   validator: function (grades: mongoose.Schema.Types.ObjectId[]) {
      //     return new Set(grades).size === grades.length;
      //   },
      //   message: "Assigned grades connot contain duplicates.",
      // },
    },
  ],
  assignedSubjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      // validate: {
      //   // Ensure no duplicates
      //   validator: function (subjects: mongoose.Schema.Types.ObjectId[]) {
      //     return new Set(subjects).size === subjects.length;
      //   },
      //   message: "Assigned subjects connot contain duplicates.",
      // },
    },
  ],
});

export default mongoose.model("Teacher", teacherSchema);
