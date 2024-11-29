import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from "../features/auth/authenticationSlice";
import announcementsReducer from "../features/announcements/announcementSlice";
export const store = configureStore({
    reducer: {
         authentication: authenticationReducer,
         announcements: announcementsReducer 
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

