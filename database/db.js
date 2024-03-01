import mongoose from "mongoose"

mongoose.set("strictQuery", false)

export const connectDB = (uri) => {
    mongoose.connect(uri)
    .then( ()=>console.log("Conectado a la DB") )
    .catch( (e)=> console.log(`No se pudo conectar a la DB: ${e}`) )
}