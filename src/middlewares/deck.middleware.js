import {findService} from "../services/deck.service.js"

export const deckMiddleware = async (req, res, next)=>{
    try {
        const {id} = req.params
        const card = await findService(id)
        //console.log(id)
        //console.log(card)
        //console.log(card.remaining)
        //req.remaining = card.remaining
        //console.log(Array. isArray(card))
        //console.log(card[0].remaining)
        //return res.send("sefwef")
        req.remaining = card[0].remaining
        req.cards = card[0].cards
        return next()
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}