import express from 'express';
// import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import connectDB  from './config/db';
import getErrorMessage from './utils/getErrorMessage';
import quizRoutes from './routes/quizRoutes';
import announcementRoutes from './routes/announcementRoutes';
//* Configuration
const http = require('http');
dotenv.config() 
const app = express();
const port = process.env.BACKEND_PORT || 5000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// middleware
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'})); // To allow requests from other servers.
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DB connection and Server Initialization:

const server = http.createServer(app);
const startServer = async () => {
    try {
        await connectDB();
        server.listen(port,()=>{
            console.log(`Server is running on port ${port}`)
        })
        
    } catch (error) {
        getErrorMessage(error);
        process.exit(1); // Exit with failure code
    }
}

// Routes
app.use('/api', quizRoutes);
app.use('/api',announcementRoutes)
startServer();



