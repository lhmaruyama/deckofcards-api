import Deck from "../models/Deck.js"

export const createService = (body) => Deck.create(body)

export const findAllService = (id) => Deck.find(id)

export const findService = (id) => Deck.find({deck_id: id})