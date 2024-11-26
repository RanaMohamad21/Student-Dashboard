import { kMaxLength } from "buffer";
import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    isGlobal: {
      type: Boolean,
      required: true,
      default: false,
    },
    announcer: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      role: {
        type: String,
        enum: ["teacher", "admin", "staff"],
        required: true,
      },
    },
    targetedGrades: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Grade",
        validate: {
          // Ensures no duplicates.
          validator: function (grades: mongoose.Schema.Types.ObjectId[]) {
            return new Set(grades).size === grades.length;
          },
          message: "Targeted grades cannot have duplicate entries.",
        },
      },
    ],
    message: {
      type: String,
      required: true,
      maxLength: 1000,
    },
    title: {
      type: String,
      required: true,
      maxLength: 100,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Validations:
announcementSchema.pre("save", function (next) {
  if (this.isGlobal && this.targetedGrades.length > 0) {
    return next(
      new Error("Global announcements cannot target specific grades.")
    );
  }
  next();
});

// For performance:
announcementSchema.index({ isGlobal: 1 });
announcementSchema.index({ "announcer.id": 1 });
announcementSchema.index({ targetedGrades: 1 });

export default mongoose.model("Announcement", announcementSchema);
