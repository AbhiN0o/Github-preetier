import express from "express"
import { getLikes, getUserProfileAndRepos, likeProfile } from "../controllers/user.controller.js"
import {ensureAuthenticated} from "../middlewares/ensureAuthenticates.js"
const Router=express.Router()

Router.get("/profile/:username",getUserProfileAndRepos)

//todo likes stuff
Router.post("/like/:username",ensureAuthenticated,likeProfile)
Router.get("/likes",ensureAuthenticated,getLikes)
export default Router