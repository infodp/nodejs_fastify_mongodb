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
        /* await connectDB(uri)
        await fastify.listen({port}, (err)=>{
            if(err) {
                console.error(err)
            }
            //console.log(`Server running in http://localhost:${port}/api/players`);
            console.log(`¡Server running!`);
        }) */   
        await connectDB(uri); // Espera a que la conexión a la base de datos se complete
        await fastify.listen(port, '0.0.0.0'); // Ahora que la conexión a la base de datos está establecida, inicia el servidor
        console.log(`Server running on port ${port}`);
    } catch (err) {
        fastify.log.error(err)
    }
}

startServer()

