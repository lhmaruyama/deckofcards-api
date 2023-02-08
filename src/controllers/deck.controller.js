import { createService, findAllService, findService, eraseService, updateService } from "../services/deck.service.js"

export const create = async (req, res) => {
    try {
        const deck_id = Math.floor(Date.now() * Math.random()).toString(36)

        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"]
        const suits = ["SPADES", "DIAMONDS", "CLUBS", "HEARTS"]

        const card = []
        const cards = []

        let k = 0
        const url = "https://deckofcardsapi.com/static/img/"

        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                const value = values[i]
                const suit = suits[j]
                card[k] = values[i] + suits[j].charAt(0)
                const code = card[k]
                const image = url + code + ".png"
                cards[k] = { code, image, value, suit }
                k++
            }
        }

        const remaining = cards.length

        const newDeck = await createService({ deck_id, cards, remaining })

        //console.log(req.body) == console.log({deck})

        res.status(201).send({ //status 201: created
            message: "Deck created successfully",
            deck_id,
            remaining
        })

    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

export const findAll = async (req, res) => {

    try {
        
        const cards = await findAllService()

        res.send({
            cards
        })

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const find = async (req, res) => {

    try {
        const {id} = req.params
        //console.log(id)
        const deck = await findService(id)

        res.send({
            deck
        })

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

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
        const id = req.params.id

        console.log("req.query: ")
        console.log(req.query.count)
        //const count = parseInt(req.query.count)

        //console.log("req.remaining: ")
        //console.log(req.remaining)
        //const remaining = req.remaining

        const cards = req.cards
        //console.log("cards: ")
        //console.log(req.cards)
        const codes = cards.map((el)=>{
            return el.code
        })
        //console.log(req.cards[index])
        console.log(codes)
        
        let remaining = codes.length
        //console.log("remaining: "  + remaining)

        const index = Math.floor(Math.random()*remaining)
        console.log("index: " + index)
        
        const code = codes[index]
        console.log("code: " + code)
        //console.log(typeof id)
        //console.log(typeof count)

        remaining = remaining - 1
        console.log("remaining: "  + remaining)
        await eraseService(id, code)
        await updateService(id, remaining)

        res.status(201).send({ //status 201: created
            message: "Card created successfully",
            //myCard
        })
    
    }catch(err){
        res.status(500).send({message: err.message})
    }
    
}