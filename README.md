# Student Quizzes and Announcements Dashboard
## Overview
This full-stack application allows users to view and manage student quizzes and announcements for the current semester. The application is designed with a focus on a responsive, user-friendly interface, using React, Redux, and Material UI on the frontend, and Express.js with MongoDB (hosted on MongoDB Atlas) on the backend. The user is required to log in to access the dashboard, which provides CRUD functionality for quizzes and announcements.

## Features
1. Login System: No username/password required; users can simply click to log in.
2. User Authentication: Only logged-in users can access the dashboard using a Higher Order Component (HOC) called requireAuth.
3. Dashboard: Displays quizzes and announcements data, with functionality for CRUD operations (Create, Read, Update, Delete) and schemas for teachers, users, students, grades, and subjects.
4. Responsive Design: The application adjusts to different screen sizes and is mobile-friendly.
5. Material UI: A modern, sleek design with hover effects on sidebar links.
6. Internationalization (i18n): The application is set up for future internationalization (i18n), and the home page can currently be translated into Arabic or French.

## Technologies Used
- Frontend: React, Redux, TypeScript, Material UI
- Backend: Express.js, MongoDB (hosted on MongoDB Atlas)
- Authentication: Custom login system (HOC requireAuth)
- Testing: Postman
- i18n Support: Internationalization setup for translation (future-proofing)


## Getting Started
### Prerequisites
Ensure you have the following installed:
`Node.js (v14 or above)`
`npm or yarn`

## Installation Instructions
- Clone the repository:
`git clone [<repository-url>](https://github.com/RanaMohamad21/Student-dashboard/)`
`cd ./frontend`

- Install frontend dependencies:
 Navigate to the frontend directory and install the required dependencies: `npm install`

-Install backend dependencies: 
Navigate to the backend directory and install the required dependencies:

`cd backend`
`npm install`

- Set up MongoDB Atlas:

Create a MongoDB Atlas account (if you haven't already) and set up a database cluster.
Copy the connection string provided by MongoDB Atlas and add it to the .env file in the backend directory:
bash
Copy code
MONGODB_URI=<your-mongo-atlas-connection-string>

## Running the Application:
-Start the backend server:

`cd backend`
`npm start`

-Start the frontend application:
`cd frontend`
`npm start`

The backend will be running on http://localhost:5000 by default.
Demo Video
You can view the demo of the task and application features in the video below:
[Demo Video Link](https://drive.google.com/file/d/1pquSPJIVBUwbCKXdnbs00POEOYh8J9sD/view?usp=sharing)

Time Spent
I spent approximately 70 hours working on this challenge, including setup, coding, testing, and documentation.

## Structure of the Code
### Frontend:
React & Redux: For state management and UI rendering.
Material UI: For consistent and modern UI components.
Responsive Design: Using CSS Grid and Flexbox to ensure the app adapts to all screen sizes.

### Backend:
Express.js: For creating the API endpoints and handling server-side logic.
MongoDB Atlas: Used for hosting the database remotely.

### Best Practices Followed
Code is modular and reusable, with components split into small, maintainable files.
State management is handled with Redux for easy scaling.
API endpoints are RESTful and follow standard conventions.
The application is prepared for i18n with future localization in mind.
