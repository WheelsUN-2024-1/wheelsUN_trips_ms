import { Router, Response, Request } from "express";
import { addPassg, deleteTrip, getTrip, getTrips, postTrip, removePassg, updateTrip } from "../controllers/trip";

const router = Router();


router.post('/', postTrip)
router.get('/', getTrips)
router.get('/:id', getTrip)
router.put('/:id', updateTrip)
router.patch('/add/:id', addPassg)
router.patch('/remove/:id', removePassg)
router.delete("/:id", deleteTrip)

export { router }