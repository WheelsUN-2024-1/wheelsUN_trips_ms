import {Schema, Types, model, Model} from "mongoose";
import { Trip } from "../interfaces/trip.interface";

const TripSchema = new Schema<Trip>(
    {
        driverId: { type: Number, required: true },
        startingPoint: { type: String, required: true },
        endingPoint: { type: String, required: true },
        passengerIds: { type: [Number], required: true },
        waypoints: { type: [], required: true },
        route: { type: Schema.Types.Mixed, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


const TripModel = model("trip", TripSchema)
export default TripModel