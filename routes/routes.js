import { getPlayers, getPlayer, createPlayer, updatePlayer, deletePlayer } from "../controllers/playerControllers.js";

const routes = async (fastify, options) => {
    fastify.get("/", getPlayers)
    fastify.get("/:id", getPlayer)
    fastify.post("/", createPlayer)
    fastify.put("/:id", updatePlayer)
    fastify.delete("/:id", deletePlayer)
}

export default routes