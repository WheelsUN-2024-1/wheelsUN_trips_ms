import { Trip } from "../interfaces/trip.interface"
import TripModel from "../models/trip"
const insertTrip = async (trip: Trip) => {
    const responseInsert = await TripModel.create(trip)
    return responseInsert
}


export default insertTrip