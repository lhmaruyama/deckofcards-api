import express from "express"

import {connectDatabase} from "./database/database.js"

import deckRoute from "./routes/deck.routes.js"
import cardRoute from "./routes/card.routes.js"

const app = express()

connectDatabase()

app.use(express.json())

app.use("/deck", deckRoute)
app.use("/card", cardRoute)

const port = 3000
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))