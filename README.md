# Student Quizzes and Announcements Dashboard

## Overview
This full-stack application allows users to view and manage student quizzes and announcements for the current semester. Designed with a focus on responsiveness and user-friendliness, the application utilizes React, Redux, and Material UI on the frontend, and Express.js with MongoDB (hosted on MongoDB Atlas) on the backend. Authentication ensures only authorized users can access the dashboard, which provides full CRUD functionality for managing quizzes and announcements.

## Features
- **Login System**: Users can log in with a single click—no need for a username or password.
- **User Authentication**: Access to the dashboard is secured with a Higher Order Component (HOC) called `requireAuth`.
- **Dashboard**: Displays quizzes and announcements with full CRUD capabilities and schemas for teachers, students, grades, and subjects.
- **Responsive Design**: Optimized for all screen sizes, ensuring mobile-friendliness.
- **Material UI**: Provides a sleek, modern design, including hover effects on sidebar links.
- **Internationalization (i18n)**: Uses the `react-i18next` package for future-proof internationalization, with the home page currently translatable into Arabic and French.

## Technologies Used
### Frontend
- **React**: For building dynamic user interfaces.
- **Redux**: State management for scalable applications.
- **TypeScript**: Ensures type safety across the codebase.
- **Material UI**: Modern and customizable UI components.

### Backend
- **Express.js**: Simplifies routing and server logic.
- **MongoDB Atlas**: Remotely hosted NoSQL database for secure and scalable data storage.

### Other Tools
- **Authentication**: Custom login system using `requireAuth` HOC.
- **Postman**: For API testing.
- **i18n Support**: Implemented using `react-i18next` for language translation.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn

### Installation Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/RanaMohamad21/Student-dashboard/
   ```
2. **Navigate to the frontend directory**:
   ```bash
   cd ./frontend
   ```
3. **Install frontend dependencies**:
   ```bash
   npm install
   ```
4. **Navigate to the backend directory**:
   ```bash
   cd ../backend
   ```
5. **Install backend dependencies**:
   ```bash
   npm install
   ```
6. **Set up MongoDB Atlas**:
   - Create a MongoDB Atlas account (if you haven’t already) and set up a database cluster.
   - Copy the connection string provided by MongoDB Atlas.
   - Add the connection string to the `.env` file in the backend directory.

### Running the Application
1. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```
2. **Start the frontend application**:
   ```bash
   cd frontend
   npm start
   ```
3. The backend will run on `http://localhost:5000` by default.

## Demo
View a demonstration of the application:
[Demo Video](https://drive.google.com/file/d/1pquSPJIVBUwbCKXdnbs00POEOYh8J9sD/view?usp=drive_link)

## Structure of the Code

### Frontend
- **React & Redux**: For dynamic state management and UI rendering.
- **Material UI**: For modern, consistent UI components.
- **Responsive Design**: Utilizes CSS Grid and Flexbox for adaptability across screen sizes.

### Backend
- **Express.js**: Handles API routing and server-side logic.
- **MongoDB Atlas**: Remotely hosted NoSQL database for secure and scalable storage.

## Best Practices Followed
- Modular and reusable code with small, maintainable components.
- Redux for efficient state management.
- RESTful API endpoints adhering to standard conventions.
- Future-proof i18n setup for seamless localization.

## Time Spent
Approximately **70 hours** were spent on this challenge, including setup, coding, testing, and documentation.

---
For any inquiries, please contact [RanaMohamad21](https://github.com/RanaMohamad21).

