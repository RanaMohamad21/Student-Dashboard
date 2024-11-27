import { Request, Response } from "express";
import Announcement from "../models/announcements";
import {formatResponse} from "../utils/formatResponse"

// CREATE: an announcement
export const createAnnouncement = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const announcementData = req.body;
    const newAnnouncement = new Announcement(announcementData);
    await newAnnouncement.save();
    res
      .status(201)
      .json(formatResponse("Announcement created successfully", newAnnouncement));
} catch (error) {
      console.error(error);
      res
        .status(500)
        .json(formatResponse( "Error creating announcement", null, error instanceof Error? error.message: String(error) ));
  
    }
  }

// Get a all announcements:
export const getAllAnnouncements = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const announcements = await Announcement.find().sort({createdAt: -1});;
    if(announcements.length === 0){
      return  res.status(200).json(formatResponse(
         "Fetch operation successful", []
      ))
    }

    res.status(200).json(formatResponse("Fetching announcements successful", announcements));
  } catch (error) {
    console.error(error);
    res.status(500).json(formatResponse("Error fetching announcements", null, error instanceof Error? error.message: String(error)))
  }
};

// Get a single announcement by its ID:
export const getAnnouncementByID = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json(formatResponse("Announcement not found", []));
    }

    res.status(200).json(formatResponse("Announcement fetched successfully",announcement));
  } catch (error) {
    console.error(error);
    res
        .status(500)
        .json(formatResponse( "Error fetching announcements", null, error instanceof Error?
           error.message : String(error)
        ));
   
  }
};

// Get a global announcements :
export const getGlobalAnnouncements = async (req: Request, res: Response) : Promise<any> =>{
  try {
    
    const announcemets = await Announcement.find({isGlobaL: true}).sort({createdAt: -1});
  if(announcemets.length === 0){
    return res.status(200).json(formatResponse("No global announcements to show", []));
  }
  res.status(200).json(formatResponse("Announcement fetching successful", announcemets));

  } catch (error) {
    res.status(500).json(formatResponse("Error fetching announcements", null, error instanceof Error? error.message: String(error)));
  }

}
