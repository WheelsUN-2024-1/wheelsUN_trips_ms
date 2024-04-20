import { Trip } from "../interfaces/trip.interface"
import TripModel from "../models/trip"
import axios from 'axios';
import "dotenv/config";



async function fetchDirections(originPoint: string, destinationPoint:string, waypoints?: string[]) {
    try {
        const params =  {
            key: process.env.GOOGLE_API_KEY,
            origin: originPoint,
            destination: destinationPoint,
            waypoints: ""
        }

        if (waypoints) {
            params.waypoints = waypoints.join('|')
        }
        const response = await axios.get(`${process.env.GOOGLE_API_URL}`, {
            params: params          
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
    const responseTrips = await TripModel.findOneAndDelete({_id:id})
    return responseTrips
}


const changeTrip = async(id:string, data:any) => {
    const responseTrip = await TripModel.findOneAndUpdate({_id:id},{$set: data},{
        new: true
    })
    return responseTrip
}


const addPassgService = async(id:string, data:any) => {
    const trip: any  = await TripModel.findById({_id:id});
    trip.route = await fetchDirections(trip.startingPoint, trip.endingPoint, [trip.waypoints, data.waypoint]);

    const responseTrip = await TripModel.findOneAndUpdate(
        {_id:id},
        { 
            $set: { route: trip.route },
            $push: { transactionIds: data.transactionId, waypoints: data.waypoint }
        },{
            new: true
        }
        )
    return responseTrip
}


const removePassgService = async(id:string, data:any) => {
    console.log('llegue aca')
    const trip: any  = await TripModel.findById({_id:id}); // Retreive trip of the given id

    if (!trip) {
        throw new Error('Trip not found');
    }
    
    // Recuperar el índice del pasajero dado por su transacción
    const passgIndex = trip.transactionIds.indexOf(data.transactionId);
    if (passgIndex === -1) {
        throw new Error('TransactionId not found');
    }


    
    trip.waypoints.splice(passgIndex, 1); // Quitar el waypoint de la posicion asociada a la transaccion 

    trip.route = await fetchDirections(trip.startingPoint, trip.endingPoint, trip.waypoints);

    const responseTrip = await TripModel.findOneAndUpdate(
        {_id:id},
        { 
            $pull: { transactionIds: data.transactionId }, // Eliminar el transactionId
            $set: { route: trip.route, waypoints: trip.waypoints } // Actualizar la ruta y los waypoints
        },{
            new: true
        }
        )
    return responseTrip
}


const placesComplete = async (query: string) => {
    try {

        const location = '4.63777,-74.084'
        const encodedLocation = encodeURIComponent(location);
        const params =  {
            key: process.env.GOOGLE_API_KEY,
            input: query,
            location: '4.63777%2C-74.084',
            radius: 30000,
            region: 'co'
        }

        const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
            params: params          
        });

        return response.data
    } catch (error) {
        console.error('Error autocompletado:', error);
    }
    
}
export {placesComplete, insertTrip, showTrips, showTrip, removeTrip, changeTrip, addPassgService, removePassgService}