import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.BACKEND_PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST','PUT','DELETE']
}))
