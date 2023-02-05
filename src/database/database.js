//YxZK9rcdSUa8taAU
//process.env.MONGODB_URI
import mongoose from "mongoose"
const mongoUri = "mongodb://deckcards:YxZK9rcdSUa8taAU@ac-bsdhpyd-shard-00-00.waaxbs0.mongodb.net:27017,ac-bsdhpyd-shard-00-01.waaxbs0.mongodb.net:27017,ac-bsdhpyd-shard-00-02.waaxbs0.mongodb.net:27017/?ssl=true&replicaSet=atlas-cdv4ad-shard-0&authSource=admin&retryWrites=true&w=majority"
export const connectDatabase =()=>{
    console.log("Wait connecting to the database...")
    mongoose.set('strictQuery', false) 
    mongoose.connect(mongoUri,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error))
}

