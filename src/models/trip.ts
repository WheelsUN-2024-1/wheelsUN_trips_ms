import {Schema, Types, model, Model} from "mongoose";
import { Trip } from "../interfaces/trip.interface";

const TripSchema = new Schema<Trip>(
    {
        route: { type: Schema.Types.Mixed, required: false },
        startingPoint: { type: String, required: true },
        endingPoint: { type: String, required: true },
        price: {type: Number, required: true},
        vehicleId: {type: Number, required: true},
        transactionIds: { type: [Number], required: false },
        waypoints: { type: [String], required: false },
        currentState: {
            type: Number, 
            required: true,
            enum: [1,2,3]},
    },
    {
        timestamps: true,
        versionKey: false
    }
)


const TripModel = model("trip", TripSchema)
export default TripModel