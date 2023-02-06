import {createService} from "../services/card.service.js"


export const create = async (req, res) => {
    try{
        //const {deck} = req.body
        //const myDeck = await createService(deck)
        //const myCard = await createService()

        //console.log(req.body) == console.log({deck})
        console.log(id)
        
        res.status(201).send({ //status 201: created
            message: "Card created successfully",
            //myCard
        })
    
    }catch(err){
        res.status(500).send({message: err.message})
    }
    
}