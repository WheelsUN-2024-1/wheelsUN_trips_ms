import {Schema, Types, model, Model} from "mongoose";
import { Trip } from "../interfaces/trip.interface";

const TripSchema = new Schema<Trip>(
    {
        driverId: { type: Number, required: true},
        startingPoint: { type: String, required: true },
        endingPoint: { type: String, required: true },
        price: {type: Number, required: true},
        vehicleId: {type: Number, required: true},
        currentState: {type: String, required: true},
        passengerIds: { type: [Number], required: false },
        waypoints: { type: [String], required: false },
        route: { type: Schema.Types.Mixed, required: false },
        transactionIds: {type: [Number], required: false},
    },
    {
        timestamps: true,
        versionKey: false
    }
)


const TripModel = model("trip", TripSchema)
export default TripModel