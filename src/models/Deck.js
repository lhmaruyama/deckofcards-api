import mongoose from "mongoose"
//const deck_id = Math.floor(Date.now() * Math.random()).toString(36)
const DeckSchema = new mongoose.Schema({
    deck_id:{
        type: String,
        require: true,
        //default: deck_id
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