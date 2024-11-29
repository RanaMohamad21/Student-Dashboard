import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Question{
    questionText: string;
    answer: string[];
    correctAnswer: string;
}

interface Submission {
    student: string;
    score: number;
    date: string;
}

interface Schedule{
    start: string;
    end: string;
}

interface Quiz{
 subject: string;
 title: string;
 questions: Question[];
 submissions: Submission[];
 schedule: Schedule;
 status:  "active" | "inactive" | "archived";
 maxScore: number;  
}

interface QuizState{
    quizzes: Quiz[];
    loading: boolean;
    error: string | null;
}

const initialState: QuizState = {
    quizzes: [],
    loading: false,
    error: null
}

// Async thunk to fetch quizzes:
export const fetchQuizzes = 
createAsyncThunk<Quiz[]>(
    "quizzes/fetchQuizzes", async () =>{
        const response = await axios.get("http://localhost:5000/api/quizzes/subject/inactive/67463bc316069d4b92d441f2");
    
        return response.data.data;
    }
)

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchQuizzes.pending, (state)=>{
            state.loading = true;
        }).addCase(fetchQuizzes.fulfilled,
            (state,action)=>{
                state.loading = false;
                state.quizzes = action.payload;
            }
        ).addCase(fetchQuizzes.rejected,
            (state, action)=>{
                state.loading = false;
                state.error = action.error.message || "Failed to load quizzes";
            }
        )
    }
});

export default quizSlice.reducer;