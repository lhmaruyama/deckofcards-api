import mongoose from "mongoose"

const CardSchema = new mongoose.Schema({
    deck_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Deck",
        required: true,
    },
    cards:{
        type: Array,
        require: true,
    },
    remaining: {
        type: String,
        require: true,
    }
})

const Card = mongoose.model("Card", CardSchema)

export default Card