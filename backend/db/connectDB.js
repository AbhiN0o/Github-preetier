import mongoose, { mongo } from "mongoose"

export const mongooseConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo Db Connected")
    }
    catch (error) {
        console.log("Error connecting to MongoDb",error.message)
    }   
}