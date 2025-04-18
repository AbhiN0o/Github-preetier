import express from "express"
import userRoutes from "../backend/routes/user.route.js"
import dotenv from "dotenv"

dotenv.config()
const app=express()
const PORT=2222

app.use("/api/users",userRoutes)


app.get("/",(req,res)=>{
    res.send("server is ready")
})


app.listen(PORT,()=>{
    console.log("Server started at PORT:",PORT)
})