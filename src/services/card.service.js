import Card from "../models/Card.js"

export const eraseService = (index) => Card.findByIdAndDelete({index})
export const updateService = (index) => Card.findOneAndUpdate(index)