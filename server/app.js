import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import connectToDb from './config/connectToDb.js';

import authRoutes from './routes/auth.routes.js';
import todoRoutes from './routes/todo.routes.js';


const app = express();
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true
}));

connectToDb();

app.use(express.json());
app.use(cookieParser());


// routes 
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes)


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is ready");
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})