import "dotenv/config"
import express from "express"
import cors from "cors"
import db from "./config/mongo"
import { getTrip as getTripController, getTrips as getTripsController, postTrip as postTripController, updateTrip as updateTripController, deleteTrip as deleteTripController, addPassg } from "./controllers/trip";


const PORT = process.env.PORT;
const app = express();
app.use(cors({ methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }));
app.use(express.json())


app.use(express.urlencoded({ extended: true })); // Middleware para analizar cuerpos URL-encoded de las solicitudes
// app.delete("/trip/:id", deleteTrip);
app.post("/trip", postTripController);
app.get("/trip", getTripsController);
app.get("/trip/:id", getTripController);
app.patch("/trip/:id", updateTripController);
app.patch("/trip/add/:id", addPassg);
app.delete("/trip/:id", deleteTripController);

db().then(()=> console.log("Connection Ready"))
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));