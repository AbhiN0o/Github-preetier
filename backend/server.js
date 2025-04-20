import express from "express"
import userRoutes from "../backend/routes/user.route.js"
import exploreRoutes from "../backend/routes/explore.route.js"
import dotenv from "dotenv"
import cors from "cors"
import {mongooseConnect} from "./db/connectDB.js"
dotenv.config()
const app=express()
const PORT=2222

app.use(cors())
app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes)



app.get("/",(req,res)=>{
    res.send("server is ready")
})


app.listen(PORT,()=>{
    console.log("Server started at PORT:",PORT)
    mongooseConnect();
})