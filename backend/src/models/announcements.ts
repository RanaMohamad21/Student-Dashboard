import mongoose, { Schema } from "mongoose";
import { AnnouncementType } from "../types/announcement";

const announcementSchema = new Schema<AnnouncementType>(
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
      },
    ],
    message: {
      type: String,
      required: true,
      maxLength: [1000, "Message cannot exceed 1000 characters"],
    },
    title: {
      type: String,
      required: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
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

export default mongoose.model<AnnouncementType>(
  "Announcement",
  announcementSchema
);
