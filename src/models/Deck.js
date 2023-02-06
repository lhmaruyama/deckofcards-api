import mongoose from "mongoose"
let deck_id = Math.floor(Date.now() * Math.random()).toString(36)
const DeckSchema = new mongoose.Schema({
    deck_id:{
        type: String,
        default: deck_id
    },
    remaining:{
        type: Number,
        default: 52
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const Deck = mongoose.model("Deck", DeckSchema)

export default Deck