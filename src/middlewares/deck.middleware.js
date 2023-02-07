import {findAllService} from "../services/deck.service.js"

export const deckMiddleware = (req, res, next)=>{
    try {
        const id = req.params
        console.log(id)
        //return res.send("sefwef")
        return next()
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}