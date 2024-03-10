import {insertTrip, showTrip, showTrips} from "../services/trip"
import { handleHttp } from "../utils/error.handle"
import { Response, Request, response } from "express"

const getTrip = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await showTrip(id)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_GET_TRIP')
    }
}


const getTrips = async (req: Request, res: Response) => {
    try {
        const responseTrip = await showTrips();
        res.send(responseTrip);
    } catch(e) {
        handleHttp(res, 'ERROR_GET_TRIPS')
    }
}


const postTrip = async ({body}:  Request, res: Response) => {
    try {
        const responseTrip = await insertTrip(body);
        res.send(responseTrip);

    } catch(e) {
        handleHttp(res, 'ERROR_POST_TRIP',e)
    }
}


const updateTrip = (req: Request, res: Response) => {
    try {

    } catch(e) {
        handleHttp(res, 'ERROR_UPDATE_TRIP')
    }
}


const deleteTrip = async ({body}: Request, res: Response) => {
    try {
        const response = insertTrip(body)
    } catch(e) {
        handleHttp(res, 'ERROR_DELETE_TRIP')
    }
}

export {getTrip, getTrips, postTrip, updateTrip, deleteTrip}