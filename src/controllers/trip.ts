import insertTrip from "../services/trip"
import { handleHttp } from "../utils/error.handle"
import { Response, Request } from "express"

const getTrip = (req: Request, res: Response) => {
    try {

    } catch(e) {
        handleHttp(res, 'ERROR_GET_TRIP')
    }
}


const getTrips = (req: Request, res: Response) => {
    try {

    } catch(e) {
        handleHttp(res, 'ERROR_GET_TRIPS')
    }
}


const postTrip = ({body}:  Request, res: Response) => {
    try {

        res.send(body);

    } catch(e) {
        handleHttp(res, 'ERROR_POST_TRIP')
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