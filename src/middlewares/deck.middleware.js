import {findService} from "../services/deck.service.js"

export const deckMiddleware = async (req, res, next)=>{
    try {
        const {id} = req.params
        const cards = await findService(id)
        req.cards = cards[0].cards
        req.deck_id = cards[0].deck_id
        return next()
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}