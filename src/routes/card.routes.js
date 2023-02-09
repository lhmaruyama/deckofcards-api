import express from "express"
import {eraseAndUpdate} from "../controllers/deck.controller.js"
import {deckMiddleware} from "../middlewares/deck.middleware.js"

const router = express.Router()

router.patch("/:id/", deckMiddleware, eraseAndUpdate)

export default router