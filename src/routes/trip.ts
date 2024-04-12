import { Router, Response, Request } from "express";
import { autoComplete, addPassg, deleteTrip, getTrip, getTrips, postTrip, removePassg, updateTrip } from "../controllers/trip";

const router = Router();


router.get('/places/:query', autoComplete)

router.post('/', postTrip)
router.get('/', getTrips)
router.get('/:id', getTrip)
router.patch('/:id', updateTrip)
router.patch('/add/:id', addPassg)
router.patch('/remove/:id', removePassg)
router.delete("/:id", deleteTrip)

export { router }