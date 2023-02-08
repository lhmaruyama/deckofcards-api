import express from "express"
import {eraseAndUpdate} from "../controllers/card.controller.js"
import {deckMiddleware} from "../middlewares/deck.middleware.js"
const router = express.Router()

//router.patch("/:id/", eraseAndUpdate)
router.patch("/:id/", deckMiddleware, eraseAndUpdate)

export default router