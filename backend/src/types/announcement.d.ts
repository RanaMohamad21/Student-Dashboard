import mongoose from "mongoose";

export interface Announcer{
    id: mongoose.Schema.Types.ObjectId;
    role: 'teacher'|'admin'| 'staff';
}

export interface AnnouncementType extends mongoose.Document{
    isGlobal: boolean;
    announcer: Announcer;
    targetedGrades: mongoose.Schema.Types.ObjectId[];
    message: string;
    title: string;
    createdAt: Date;
}

// ??

