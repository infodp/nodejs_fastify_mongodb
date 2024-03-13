import Fastify from "fastify"
import { connectDB } from "./database/db.js"
import routes from "./routes/routes.js"

import dotenv from 'dotenv';
dotenv.config({path:'./.env'});


const fastify = Fastify({
    logger:true
})

fastify.register(routes, {prefix:"/api/players"})

const port = process.env.PORT || 5000
const uri = process.env.MONGO_URI

const startServer = async () => {
    try {
        //connectDB(uri)
        // fastify.listen({port}, (err)=>{
        //     if(err) {
        //         console.error(err)
        //     }
        //     //console.log(`Server running in http://localhost:${port}/api/players`);
        //     console.log(`¡Server running!`);
        // })   
        
        connectDB(uri);
        fastify.listen(port, {
            host: '0.0.0.0',
            ips: ['52.41.36.82', '54.191.253.12', '44.226.122.3']
        });
        console.log(`Server running on port ${port}`);
    } catch (err) {
        fastify.log.error(err)
    }
}

startServer()

