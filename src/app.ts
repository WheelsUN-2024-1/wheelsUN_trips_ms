import "dotenv/config"
import express from "express"
import cors from "cors"
import db from "./config/mongo"
import { getTrip as getTripController, getTrips as getTripsController, postTrip as postTripController, updateTrip as updateTripController, deleteTrip as deleteTripController, addPassg } from "./controllers/trip";
import { router } from "./routes";


const PORT = process.env.PORT;
const app = express();
app.use(express.json())
app.use(cors());
app.use(router);

db().then(()=> console.log("Connection Ready"))
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));