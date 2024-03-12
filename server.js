import Fastify from "fastify"
import { connectDB } from "./database/db.js"
import routes from "./routes/routes.js"

const fastify = Fastify({
    logger:true
})

fastify.register(routes, {prefix:"/api/players"})

const port = process.env.PORT || 5000
const uri = process.env.MONGO_URI

const startServer = async () => {
    try {
        connectDB(uri)
        fastify.listen({port}, (err)=>{
            if(err) {
                console.error(err)
            }
            //console.log(`Server running in http://localhost:${port}/api/players`);
            console.log(`¡Server running!`);
        })        
    } catch (err) {
        fastify.log.error(err)
    }
}

startServer()

