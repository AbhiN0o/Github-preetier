import express from "express"
import { getExploreRepos } from "../controllers/explore.controller.js"

const router=express.Router()

router.get("/repos/:language",getExploreRepos)


export default router