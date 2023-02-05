import express from "express"
import {createDeck} from "../controllers/deck.controller.js"

const router = express.Router()

router.post("/new", createDeck)

export default router