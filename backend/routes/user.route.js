import express from "express"
import { getUserProfileAndRepos } from "../controllers/user.controller.js"

const Router=express.Router()

Router.get("/profile/:username",getUserProfileAndRepos)

//todo likes stuff
export default Router