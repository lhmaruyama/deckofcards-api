import {createService} from "../services/deck.service.js"

export const create = async (req, res) => {
    try{
        //const {deck} = req.body
        //const myDeck = await createService(deck)
        const myDeck = await createService()

        //console.log(req.body) == console.log({deck})
        //console.log(myDeck)
        
        res.status(201).send({ //status 201: created
            message: "Deck created successfully",
            myDeck
        })
    
    }catch(err){
        res.status(500).send({message: err.message})
    }
    
    }