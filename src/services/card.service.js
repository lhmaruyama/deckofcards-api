import Card from "../models/Card.js"

export const createService = (query) => Card.create(query)