import { Router } from "express";
import {createAnnouncement,
    getAllAnnouncements,
    getAnnouncementByID,
    getGlobalAnnouncements,
    getAnnouncementsByGrade,
    getAnnouncementsByStudent,
    updateAnnouncement,
    deleteAnnouncement
} from "../controllers/announcementController";

const router = Router();

// CREATE: Create a new announcement
router.post('/announcements', createAnnouncement);

//  READ: Fetch announcements
router.get('/announcements',getAllAnnouncements);        // Get all announcements
router.get('/announcements/:id', getAnnouncementByID);  // Get a single announcement by ID
router.get('/announcements/grade/:gradeId', getAnnouncementsByGrade);   // Get announcements for a specific grade
router.get('/announcements/student/:gradeId', getAnnouncementsByStudent); // Get announcements for a student's grade + global announcements
router.get('/globalannouncements/', getGlobalAnnouncements);    // Get all global announcements

router.put('/announcements/:id',updateAnnouncement);     // Update an announcement by ID
router.delete('/announcements/:id', deleteAnnouncement); // Delete an announcement by ID

export default router;
