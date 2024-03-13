import Fastify from "fastify"
import { connectDB } from "./database/db.js"
import routes from "./routes/routes.js"
import dotenv from 'dotenv'

dotenv.config({path:['.env']})

const fastify = Fastify({
    logger:true
})

fastify.register(routes, {prefix:"/api/players"})

const port = process.env.PORT || 5000
const uri = process.env.MONGO_URI

const startServer = async () => {
    try {
        await fastify.listen({ port, host: "0.0.0.0" }, (err, address) => {
        if (err) {
          fastify.log.error(err);
        } else {
          console.log(`Servidor running`);
        }
      });
    } catch (err) {
        fastify.log.error(err)
    }
}

startServer()

