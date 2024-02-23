import express, { Request, Response } from 'express';
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import cookieParser from "cookie-parser"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({ // Define who can access the server
    origin: process.env.FRONTEND_URL, // only accept requests from this URL
    credentials: true // The URL must include the credentials or a cookie in the request
}))

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(7000, () => {
    console.log("server running on localhost:7000")
})

