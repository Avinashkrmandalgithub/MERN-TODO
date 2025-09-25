import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import connectToDb from './config/connectToDb.js';

import authRoutes from './routes/auth.routes.js';


const app = express();

connectToDb();

app.use(express.json());
app.use(cookieParser());


// routes 
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is ready");
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})