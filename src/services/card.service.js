import Card from "../models/Card.js"

export const eraseService = (query) => Card.findByIdAndDelete(query)
export const updateService = (query) => Card.findOneAndUpdate(query)