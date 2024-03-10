import { Router, Response, Request } from "express";
import { deleteTrip, getTrip, getTrips, postTrip, updateTrip } from "../controllers/trip";

const router = Router();

router.post('/', postTrip)

router.get('/', getTrips)
router.get('/:id', getTrip)

router.put(':/id', updateTrip)
router.delete(':/id', deleteTrip)

export { router }