import { PlayerModel } from "../models/PlayerModel.js";

export const getPlayers = async (request, reply) => {
    try {
        const players =  await PlayerModel.find()
        reply.status(200).send(players)    
    } catch (error) {
        reply.status(500).send({message:error.message})
    }
}

export const getPlayer = async (request, reply) => {
    try {
        const {id} = request.params
        const player = await PlayerModel.findById(id)
        if(!player){
            reply.status(404).send(`Player with ID: ${id} not found`)
        }
        reply.status(200).send(player)
    } catch (error) {
        reply.status(500).send({message:error.message})
    }
}

export const createPlayer = async (request, reply) => {
    try {
        const player = await PlayerModel.create(request.body)
        reply.status(201).send(player)
    } catch (error) {
        if(error.name === 'ValidationError'){
            const errors = Object.values(error.errors).map(error => error.message)
            reply.status(400).send({message:'Validation error', errors})
        }else {
            reply.status(500).send({message:"An error has ocurred."})
        }
    }
}

export const updatePlayer = async (request, reply) => {
    try {
        const {id} = request.params
        const updatedPlayer = await PlayerModel.findOneAndUpdate(
            {_id: id},
            request.body,
            {new:true, runValidators:true}
        )
        if(updatedPlayer){
            reply.status(200).send(updatedPlayer)
        } else {
            reply.status(404).send({message:'Player not found'})
        }
    } catch (error) {
        if(error.name === 'ValidationError'){
            const errors = Object.values(error.errors).map(error => error.message)
            reply.status(400).send({message:'Validation error', errors})
        }else {
            reply.status(500).send({message:"An error has ocurred."})
        }
    }
}

export const deletePlayer = async (request, reply) => {
    try {
        const {id} = request.params
        const player = await PlayerModel.findByIdAndDelete(id)
        if(!player) {
            reply.status(404).send(`Player with ID: ${id} not found`)
        }
        reply.status(200).send("Player successfully removed")
    } catch (error) {
        reply.status(500).send({message: error.message})
    }
}