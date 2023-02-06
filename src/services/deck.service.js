import Deck from "../models/Deck.js"

export const createService = (body) => Deck.create(body)

export const findService = (id) => Deck.findOne()