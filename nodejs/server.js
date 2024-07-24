import express, { Router } from "express"
const app=express();
import db from "./db.js"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'; 
app.use(cookieParser()); // Add thi
dotenv.config()
app.use(express.json())
app.use(express.urlencoded()); 
app.use(cors({
  origin: ["http://localhost:5173"], 
  credentials: true,   //allows cookies to be sent and received between the frontend and backend.
}));

//access the routes
import router from "./route/laptopRoutes.js"
app.use("/",router)

import UserRouter from "./route/userRoutes.js";
app.use("/",UserRouter)

import blogRouter from "./route/blogRoutes.js";
app.use("/",blogRouter)

const port=process.env.PORT
//always used for file ..give the access for the files inside the storage folder
app.use(express.static("./storage/")) 

app.listen(port,()=>{
    console.log(`Connected on the port ${port}`)
})
