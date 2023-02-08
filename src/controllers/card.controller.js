import {eraseService} from "../services/card.service.js"
import {updateService} from "../services/card.service.js"


export const eraseAndUpdate = async (req, res) => {
    try{

        //const {deck} = req.body
        //const myDeck = await createService(deck)
        //const myCard = await createService()

        //console.log(req.body) == console.log({deck})

        //console.log("id: " + id)
        //console.log("req.id: " + req.id)

        console.log("req.params: ")
        console.log(req.params.id)
        const id = parseInt(req.params.id)

        console.log("req.query: ")
        console.log(req.query.count)
        const count = parseInt(req.query.count)

        console.log("req.remaining: ")
        console.log(req.remaining)
        const remaining = req.remaining


        const card = Math.floor(Math.random()*remaining)
        console.log(card)
        console.log("cards: ")
        console.log(req.cards[card])


        //console.log(typeof id)
        //console.log(typeof count)

        
        res.status(201).send({ //status 201: created
            message: "Card created successfully",
            //myCard
        })
    
    }catch(err){
        res.status(500).send({message: err.message})
    }
    
}