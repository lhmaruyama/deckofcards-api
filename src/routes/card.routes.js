import express from "express"
import {create} from "../controllers/card.controller.js"
import {deckMiddleware} from "../middlewares/deck.middleware.js"
const router = express.Router()

//router.post("/deck/:id", deckMiddleware)
router.post("/deck/:id", deckMiddleware, create)

export default router