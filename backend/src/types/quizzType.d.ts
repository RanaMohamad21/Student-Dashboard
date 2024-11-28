import mongoose from "mongoose";

interface Question {
    questionText: string;
    answers: string[];
    correctAnswer: string;
}

interface Submission{
    student: mongoose.Schema.Types.ObjectId;
    score: number;
    date: Date;
}

interface Schedule{
    start: Date;
    end: Date;
}

export interface Quiz extends Document {
    subject: mongoose.Schema.Types.ObjectId;
    title: string;
    questions: Question[];
    submissions: submissions[];
    schedule: Schedule;
    status: "active" | "inactive" | "archived";
    maxScore: number;
}