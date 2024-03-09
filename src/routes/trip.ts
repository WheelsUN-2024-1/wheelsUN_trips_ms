import { Router, Response, Request } from "express";
import { deleteTrip, getTrip, getTrips, postTrip, updateTrip } from "../controllers/trip";

const router = Router();



router.get('/', getTrips)
router.get('/:id', getTrip)



router.post('/', postTrip)


router.put('/:id', updateTrip)

router.delete("/:id", deleteTrip)

export { router }