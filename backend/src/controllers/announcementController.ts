import { Request, Response } from "express";
import Announcement from "../models/announcements";
import { formatResponse } from "../utils/formatResponse";
import mongoose from "mongoose";


// CREATE: a new announcement
export const createAnnouncement = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { isGlobal, announcer, targetedGrades, message, title } = req.body;

    if (!Array.isArray(targetedGrades)) {
      throw new Error("targetedGrades must be an array.");
    }

    // Convert targetedGrades from string to ObjectId if needed
    const validTargetedGrades = targetedGrades.map(
      (grade: string) => new mongoose.Types.ObjectId(grade)
    );

    // Check for duplicate grades
    if (new Set(validTargetedGrades).size !== validTargetedGrades.length) {
      return res.status(400).json({
        message: "Targeted grades cannot have duplicate entries.",
      });
    }

    const newAnnouncement = new Announcement({
      isGlobal,
      announcer,
      targetedGrades: validTargetedGrades,
      message,
      title,
    });

    // Save the new announcemnet to the database
    await newAnnouncement.save();

    //  Send back the created announcement in the response
    res
      .status(201)
      .json(
        formatResponse("Announcement created successfully", newAnnouncement)
      );
  } catch (error) {
    console.error(
      "Error stack:",
      error instanceof Error ? error.message : String(error)
    );

    res
      .status(500)
      .json(
        formatResponse(
          "Error creating announcement",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// Get all announcements:
export const getAllAnnouncements = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });

    if (announcements.length === 0) {
      return res.status(200).json(formatResponse("No announcements found", []));
    }

    res
      .status(200)
      .json(
        formatResponse("Announcements fetched successfully", announcements)
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching announcements",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// Get a single announcement by its ID:
export const getAnnouncementByID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const announcementId = req.params.id;
    const announcement = await Announcement.findById(announcementId);
    if (!announcement) {
      return res.status(404).json(formatResponse("Announcement not found", []));
    }

    res
      .status(200)
      .json(formatResponse("Announcement fetched successfully", announcement));
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching announcement",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// Get global announcements :
export const getGlobalAnnouncements = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const announcements = await Announcement.find({ isGlobal: true }).sort({
      createdAt: -1,
    });
    if (announcements.length === 0) {
      return res
        .status(200)
        .json(formatResponse("No global announcements found", []));
    }
    res
      .status(200)
      .json(
        formatResponse(
          "AGlobal announcements fetched successfully",
          announcements
        )
      );
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching global announcements",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// Get announcement to a targeted grade:
export const getAnnouncementsByGrade = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const gradeId = req.params.gradeId;

    const announcements = await Announcement.find({
      // Check if the gradeId is in the array
      targetedGrades: { $in: [gradeId] },
    });

    if (announcements.length === 0) {
      return res
        .status(200)
        .json(
          formatResponse("No announcements found for the specified grade", [])
        );
    }
    res
      .status(200)
      .json(
        formatResponse(
          "Announcements fetched successfully for the specified grade",
          announcements
        )
      );
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error fetching announcements by grade",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// Get Announcements by Student's Grade (Global + Targeted to Student's Grade) For the last 7 days
export const getAnnouncementsByStudent = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const gradeID = req.params.gradeId;
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    const gradeAndGlobalAnnouncements = await Announcement.find({
      $or: [
        {
          isGlobal: true,
          createdAt: { $gte: sevenDaysAgo, $lte: currentDate }, // Apply date filter to global announcements
        },
        {
          targetedGrades: { $in: [gradeID] }, // Targeted to the specific grade
          createdAt: { $gte: sevenDaysAgo, $lte: currentDate }, // Apply date filter to grade-specific announcements
        },
      ],
    });

    if (gradeAndGlobalAnnouncements.length === 0) {
      return res
        .status(200)
        .json(formatResponse("No announcement found for this student", []));
    }
    res
      .status(200)
      .json(
        formatResponse(
          "Announcements fetchd successfully",
          gradeAndGlobalAnnouncements
        )
      );
  } catch (error) {
    res
      .status(500)
      .json(formatResponse("Error fetching announcements", null, error));
  }
};

// Update an existing announcement:
export const updateAnnouncement = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const announcementId = req.params.id;
    const updatedData = req.body;
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      announcementId,
      updatedData,
      { new: true }
    );

    if (!updatedAnnouncement) {
      res
        .status(404)
        .json(
          formatResponse(
            "Announcement not found for update",
            null,
            "NotFoundError"
          )
        );
    }
    res
      .status(200)
      .json(
        formatResponse("Announcement updated successfully", updatedAnnouncement)
      );
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error updating announcement",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};

// Delete an announcement by ID:
export const deleteAnnouncement = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const announcementId = req.params.id;
    const deletedAnnouncment = await Announcement.findByIdAndDelete(
      announcementId
    );

    if (!deletedAnnouncment) {
      return res
        .status(404)
        .json(
          formatResponse(
            "Announcement not found for deletion",
            null,
            "NotFoundError"
          )
        );
    }
    res
      .status(200)
      .json(
        formatResponse("Announcement deleted successfully", deletedAnnouncment)
      );
  } catch (error) {
    res
      .status(500)
      .json(
        formatResponse(
          "Error deleting announcement",
          null,
          error instanceof Error ? error.message : String(error)
        )
      );
  }
};
