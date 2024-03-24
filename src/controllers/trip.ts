import {insertTrip, showTrip, showTrips, removeTrip, changeTrip, addPassgService, removePassgService} from "../services/trip"
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


const updateTrip = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const response = await changeTrip(id, body)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_UPDATE_TRIP')
    }
}


const deleteTrip = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await removeTrip(id)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_DELETE_TRIP')
    }
}



const addPassg = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const response = await addPassgService(id, body)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_UPDATE_TRIP')
    }
}


const removePassg = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const response = await removePassgService(id, body)
        res.send(response)
    } catch(e) {
        handleHttp(res, 'ERROR_UPDATE_TRIP')
    }
}


export {getTrip, getTrips, postTrip, updateTrip, deleteTrip, addPassg, removePassg}