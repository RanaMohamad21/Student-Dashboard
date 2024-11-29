import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from "../features/auth/authenticationSlice";
import announcementsReducer from "../features/announcements/announcementSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice"
export const store = configureStore({
    reducer: {
         authentication: authenticationReducer,
         announcements: announcementsReducer,
         quizzes:  quizzesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

