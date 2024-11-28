import express from 'express';
import { 
  createQuiz, 
  getQuiz, 
  getAllQuizzes, 
  getOldQuizzesByStudent, 
  getQuizzesByDate, 
  getArchivedQuizzesBySubject, 
  getActiveQuizzes, 
  updateQuiz, 
  deleteQuiz, 
  getInactiveQuizzesBySubject 
} from "../controllers/quizzController";

const router = express.Router();

// Routes related to quizzes:
router.post('/quizzes', createQuiz); // Route to create a quiz:
router.get('/quizzes', getAllQuizzes); // Route to get all quizzes:
router.get('/quizzes/:id', getQuiz); // Route to get a single quiz by ID:
router.put('/quizzes/:id', updateQuiz); // Route to update a quiz:
router.delete('/quizzes/:id', deleteQuiz); // Route to delete a quiz

// Routes related to student:
router.get('/quizzes/student/:id', getOldQuizzesByStudent); // Route to get quizzes submitted by a specific student:

// Routes related to subject:
router.get('/quizzes/subject/inactive/:id', getInactiveQuizzesBySubject); // Route to get all upcoming quizzes for a subject:
router.get('/quizzes/subject/archived/:id', getArchivedQuizzesBySubject); // Route to get archived quizzes for a subject

// Routes related to date:
router.get('/quizzes/date', getQuizzesByDate); // Route to get quizzes by specific date:

// Routes related to active quizzes:
router.get('/quizzes/active', getActiveQuizzes); // Route to get active quizzes

export default router;
