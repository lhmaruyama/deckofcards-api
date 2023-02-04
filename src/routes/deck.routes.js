import express from "express"
import {deck} from "../controllers/deck.controller.js"

const router = express.Router()

router.get("/",deck)

export default router