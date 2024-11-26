import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      questionText: {
        type: String,
        required: true,
      },
      answers: [
        {
          type: String,
          required: true,
        },
      ],
      correctAnswer: {
        type: String,
        required: true,
      },
    },
  ],
  submissions: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
      score: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  schedule: {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
  status: {
    type: String,
    enum: [
      "active", // A quiz that is currently visible for students to take
      "inactive", // A quiz that the teacher added but is assigned for an upcoming date
      "archived",
    ], // An old quiz which was taken by students before
    default: "inactive",
  },
  maxScore: {
    type: Number,
    required: true,
  },
});
quizSchema.index({ subject: 1 });
quizSchema.index({ "schedule.start": 1 });

quizSchema
  .path("questions")
  .validate(
    (v: any[]) => v.length > 0,
    "A quiz must have at least one question."
  );
quizSchema
  .path("questions")
  .validate(
    function (questions: any[]){
        return questions.every(question=> question.answers?.length > 0)
    }
   ,
    "A question must have at least one answer."
  );
quizSchema
  .path("submissions")
  .validate(
    function (submissions: any[]){
        return submissions.every(submission=> submission.score> 0 && submission.score< this.maxScore )
    }
   ,
    "Each submission must have a valid score between 0 and the maximum score."
  );

//   Indexes for performance:
quizSchema.index({"submissions.student":1});

export default mongoose.model("Quiz", quizSchema);
