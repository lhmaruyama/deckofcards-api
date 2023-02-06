import express from "express"
import {create} from "../controllers/deck.controller.js"

const router = express.Router()

router.post("/new", create)

export default router