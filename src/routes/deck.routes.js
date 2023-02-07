import express from "express"
import {create, findAll, find} from "../controllers/deck.controller.js"

const router = express.Router()

router.post("/new", create)
router.get("/", findAll)
router.get("/card/:id", find)

export default router