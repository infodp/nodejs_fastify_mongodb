import mongoose from "mongoose"

const playerSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please complete the field"],
            minlength: [3, "Description must be at least 3 characters long"],
            maxlength: [50, "Description cannot exceed 50 characters"]
        },
        age:{
            type: Number,
            required: [true, "Please complete the field"],
            min: [16, "Cannot be under 16 years old"],
            max: [50, "Cannot be older than 50 years"]
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

export const PlayerModel = mongoose.model("Player", playerSchema)