import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Announcer {
  id: string;
  role: "teacher" | "admin" | "staff";
}

interface Announcement {
  isGlobal: boolean;
  announcer: Announcer;
  targetedGrades: string[];
  message: string;
  title: string;
  createdAt: string;
}

interface AnnouncementState {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

const initialState: AnnouncementState = {
  announcements: [],
  loading: false,
  error: null,
};

// Async thunk to fetch announcements:
export const fetchAnnouncements = createAsyncThunk<Announcement[]>(
  "announcements/fetchAnnouncements",
  async () => {
    const response = await axios.get("http://localhost:5000/api/announcements");
    
    return response.data.data;
  }
);

const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load announcements";
      });
  },
});

export default announcementSlice.reducer;
