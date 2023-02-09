import Deck from "../models/Deck.js"

export const createService = (body) => Deck.create(body)

export const findAllService = (id) => Deck.find(id)

export const findService = (id) => Deck.find({ deck_id: id })

export const eraseService = (id, code) => Deck.findOneAndUpdate({ deck_id: id }, { $pull: { cards: { code: code } } })

export const updateService = (id, remaining) => Deck.findOneAndUpdate({ deck_id: id }, { remaining })