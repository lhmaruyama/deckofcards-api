import mongoose from "mongoose"

const DeckSchema = new mongoose.Schema({
    deck:{
        type: String,
        default: "new"
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const Deck = mongoose.model("Deck", DeckSchema)

export default Deck