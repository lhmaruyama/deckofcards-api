import express from "express"
import deckRoute from "./routes/deck.routes.js"

const app = express()

app.use(express.json())

app.use("/deck", deckRoute)

const port = 3000
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))