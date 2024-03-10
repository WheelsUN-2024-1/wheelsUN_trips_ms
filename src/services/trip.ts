import { Trip } from "../interfaces/trip.interface"
import TripModel from "../models/trip"
import axios from 'axios';
import "dotenv/config";



async function fetchDirections(originPoint: string, destinationPoint:string) {
    try {
        const response = await axios.get(`${process.env.GOOGLE_API_URL}`, {
            params: {
                key: process.env.GOOGLE_API_KEY,
                origin: originPoint,
                destination: destinationPoint
            }
        });
        console.log(response.data); // Aquí puedes manejar los datos obtenidos
        return response.data
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}



const insertTrip = async (trip: Trip) => {
    // Creaciòn de la ruta apartir de los datos obtenidos

    const route = await fetchDirections(trip.startingPoint, trip.endingPoint);

    const newTrip = trip;
    newTrip.route = route;
    console.log("Ruta del viaje", newTrip.route)
    const responseInsert = await TripModel.create(newTrip);
    return responseInsert;
}

const showTrips = async () => {
    const responseTrip = await TripModel.find({});
    return responseTrip;
}


const showTrip = async (id:string) => {
    const responseTrips = await TripModel.findOne({_id:id})
    return responseTrips
}

const removeTrip = async (id:string) => {
    const responseTrips = await TripModel.deleteOne({_id:id})
    return responseTrips
}


const changeTrip = async(id:string, data:Trip) => {
    const responseItem = await TripModel.findOneAndUpdate(
        {_id:id},
        data,
        {
            new: true
        }
        )
}

export {insertTrip, showTrips, showTrip, removeTrip, changeTrip}