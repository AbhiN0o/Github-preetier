import express from "express"
import userRoutes from "../backend/routes/user.route.js"
import exploreRoutes from "../backend/routes/explore.route.js"
import authRoutes from "../backend/routes/auth.route.js"
import dotenv from "dotenv"
import cors from "cors"
import session from "express-session"
import "./passport/github.auth.js"
import passport from "passport"
import {mongooseConnect} from "./db/connectDB.js"
import path from "path"


dotenv.config()
const app=express()
const PORT=process.env.PORT || 2222
const __dirname=path.resolve()
app.use(cors({
    origin: 'http://localhost:1234',
    credentials: true
  }))
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes)
app.use("/api/auth",authRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


app.listen(PORT,()=>{
    console.log("Server started at PORT:",PORT)
    mongooseConnect();
})