import {Request, Response} from 'express';
import Quiz from "../models/quizzes";
import getErrorMessage from '../utils/getErrorMessage';

// CREATE: Add a new Quiz
export const createQuiz = async (req: Request, res:Response): Promise<any> =>{
    try {
       const quizData  = req.body;
       const newQuiz = new Quiz(quizData);
       await newQuiz.save();
       res.status(201).json({message:"Quiz created Successfully", quiz: newQuiz});
    } catch (error) {

       getErrorMessage(error);
       if(error instanceof Error){
           res.status(500).json({message: 'Error creating Quiz', error:error.message})
       } else{
        res.status(500).json({message: 'Error creating Quiz', error:String(error)})
       }
    }
}

// READ: Get a single Quiz by ID:
export const getQuiz = async (req:Request,res:Response): Promise<any> =>{
    try {
        const quiz = await Quiz.findById(req.params.id);
        if(!quiz){
            return res.status(404).json({message: "Quiz not found"});
        }
        return res.status(200).json(quiz);
    } catch (error) {
       return  res.status(500).json({message: 'Error fetching Quiz', error:String(error)})
    }
}

// READ: Get all quizzes:
export const getAllQuizzes = async (req:Request,res:Response): Promise<any>=>{
    try {
        const quizzes = await Quiz.find();

        if(quizzes.length === 0){
            return res.status(404).json({message: "No quizzes to show!"});
        }
        
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({message: 'Error fetching quizzes', error:String(error)})
    }
}


// READ: Get all quizzes submitted by a student:
export const getOldQuizzesByStudent = async (req:Request,res:Response): Promise<any>=>{
    try {
        const quizzes = await Quiz.find({'submissions.student': req.params.id});
        if(quizzes.length === 0){
            return res.status(404).json({message: "No quizzes submitted by this student!"});
        }
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({message: 'Error fetching quizzes', error:String(error)})
    }
}

// READ: Get all upcomming quizzes for a subject:
export const getInactiveQuizzesBySubject = async (req:Request,res:Response): Promise<any>=>{
    try {
        const quizzes = await Quiz.find({status: 'inactive', subject: req.params.id });
        if(quizzes.length === 0){
            return res.status(404).json({message: "No quizzes upcomming quizzes for the subject!"});
        }
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({message: 'Error fetching quizzes', error:String(error)})
    }
}

// READ: Get quizzes by date:
export const getQuizzesByDate = async (req:Request,res:Response): Promise<any>=>{
    try {
        const {start} = req.query; // Get the start date
        if(typeof start !== 'string'){
            return res.status(400).json({message: `Invalid or missing start date!`});
        }

        const startDate = new Date(start);
        const quizzes = await Quiz.find({'schedule.start': startDate});
        if(!quizzes){
            return res.status(404).json({message: `There isn't any quiz under the date: ${start}!`});
        }
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({message: 'Error fetching quizzes', error:String(error)})
    }
}

// READ: Get archived (old) quizzes for a subject:
export const getArchivedQuizzesBySubject = async (req:Request,res:Response): Promise<any>=>{
    try {
        const quizzes = await Quiz.find({status: 'archived', subject: req.params.id });
        if(!quizzes){
            return res.status(404).json({message: `No archived quizzes!`});
        }
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({message: 'Error fetching archived quizzes', error:String(error)})
    }
}

// READ: Get all upcomming quizzes by date:
export const getInactiveQuizzesByDate = async (req:Request,res:Response): Promise<any>=>{
    try {
        const {start} = req.query;
        if(typeof start !== 'string'){
            return res.status(400).json({message: `Invalid or missing start date!`});
        }

        const startDate = new Date(start);
        const quizzes = await Quiz.find({'schedule.start': startDate,
            status: 'inactive'});
        if(!quizzes){
            return res.status(404).json({message: `No qizzes on specified date`});
        }
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({message: 'Error fetching quizzes', error:String(error)})
    }
}

// READ: Get all active (currently visible to students) quizzes:
export const getActiveQuizzes = async (req:Request,res:Response): Promise<any>=>{
    try {
        const quizzes = await Quiz.find({
            status: 'active'});
        if(quizzes.length === 0){
            return res.status(404).json({message: `No active qizzes`});
        }
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({message: 'Error fetching  quizzes', error:String(error)})
    }
}

// UPDATE: Update quiz details by ID 
export const updateQuiz = async(req:Request, res:Response): Promise<any>=>{
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body,{
            new:true, runValidators: true
        });
        if(!updatedQuiz){
            return res.status(404).json({message: "Quiz not found!"});
        }
        res.status(200).json({message:"Quiz updated successfuly", quiz: updateQuiz});

    } catch (error) {
        res.status(500).json({message: 'Error updating  quiz', error:String(error)})
    }
}

// DELETE: Delete a quiz by ID
export const deleteQuiz = async(req:Request, res:Response): Promise<any>=>{
    try {
        const deleteQuiz = await Quiz.findByIdAndDelete(req.params.id);
        
        if(!deleteQuiz){
            return res.status(404).json({message: 'Quiz not found!'})
        }
        res.status(200).json({message: 'Quiz deleted successfully'
        })
    } catch (error) {
        res.status(500).json({message: 'Error deleting  quiz', error:String(error)})
    }
}


