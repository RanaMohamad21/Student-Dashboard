import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
  },
  SubjectCode: {
    type: String,
    required: true,
    unique: true, // Ex: "Math01"
  },
  classroom: {
    type: String,
    required: false,
  },
  schedule: {
    type: String,
    required: false,
  },

  assignedTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
});

// For faster queries
subjectSchema.index({ subjectName: 1 });
subjectSchema.index({ assignedGrade: 1 });
subjectSchema.index({ assignedTeacher: 1 });

export default mongoose.model("Subject", subjectSchema);
