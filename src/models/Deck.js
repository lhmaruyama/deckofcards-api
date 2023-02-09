import mongoose from "mongoose"

const DeckSchema = new mongoose.Schema({
    deck_id:{
        type: String,
        require: true,
    },
    cards:{
        type: Array,
        require: true,
    },
    remaining:{
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const Deck = mongoose.model("Deck", DeckSchema)

export default Deck