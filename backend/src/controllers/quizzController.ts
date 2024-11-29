import { Request, Response } from "express";
import Quiz from "../models/quizzes";
import Subject from "../models/subjects";
import { formatResponse } from "../utils/formatResponse";
import mongoose from "mongoose";

// CREATE: Add a new Quiz
export const createQuiz = async (req: Request, res: Response): Promise<any> => {
  try {
    const quizData = req.body;
    const newQuiz = new Quiz(quizData);
    await newQuiz.save();
    res.status(201).json(formatResponse("Quiz created successfully", newQuiz));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error creating quiz",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// READ: Get a single Quiz by ID
export const getQuiz = async (req: Request, res: Response): Promise<any> => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res
        .status(404)
        .json(formatResponse("Quiz not found", null, "NotFoundError"));
    }
    res.status(200).json(formatResponse("Quiz fetched successfully", quiz));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching quiz",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// READ: Get all quizzes
export const getAllQuizzes = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const quizzes = await Quiz.find();
    res
      .status(200)
      .json(formatResponse("Quizzes fetched successfully", quizzes));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching quizzes",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// READ: Get all quizzes submitted by a student
export const getOldQuizzesByStudent = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const quizzes = await Quiz.find({ "submissions.student": req.params.id });
    res
      .status(200)
      .json(formatResponse("Quizzes fetched successfully", quizzes));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching quizzes",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// READ: Get all upcoming quizzes for a subject
export const getInactiveQuizzesBySubject = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const subjectId = new mongoose.Types.ObjectId(req.params.id);
    const quizzes = await Quiz.find({       status: "inactive",       subject: subjectId });
    res      .status(200)      .json(formatResponse("Quizzes fetched successfully", quizzes));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching quizzes",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// READ: Get quizzes by date

export const getQuizzesByDate = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { start } = req.query;
    if (typeof start !== "string") {
      return res
        .status(400)
        .json(formatResponse("Invalid or missing start date"));
    }

    const startDate = new Date(start);
    const quizzes = await Quiz.find({ "schedule.start": startDate });
    res
      .status(200)
      .json(formatResponse("Quizzes fetched successfully", quizzes));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching quizzes",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// READ: Get archived quizzes for a subject
export const getArchivedQuizzesBySubject = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const quizzes = await Quiz.find({
      status: "archived",
      subject: req.params.id,
    });
    res
      .status(200)
      .json(formatResponse("Archived quizzes fetched successfully", quizzes));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching archived quizzes",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// READ: Get all active quizzes
export const getActiveQuizzes = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const quizzes = await Quiz.find({ status: "active" });
    res
      .status(200)
      .json(formatResponse("Active quizzes fetched successfully", quizzes));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching active quizzes",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// UPDATE: Update quiz details by ID
export const updateQuiz = async (req: Request, res: Response): Promise<any> => {
  try {
    const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedQuiz) {
      return res
        .status(404)
        .json(formatResponse("Quiz not found", null, "NotFoundError"));
    }
    res
      .status(200)
      .json(formatResponse("Quiz updated successfully", updatedQuiz));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error updating quiz",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// DELETE: Delete a quiz by ID
export const deleteQuiz = async (req: Request, res: Response): Promise<any> => {
  try {
    const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!deletedQuiz) {
      return res
        .status(404)
        .json(formatResponse("Quiz not found", null, "NotFoundError"));
    }
    res.status(200).json(formatResponse("Quiz deleted successfully"));
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error deleting quiz",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};
