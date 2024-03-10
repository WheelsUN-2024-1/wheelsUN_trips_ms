import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";
import db from "./config/mongo"


const PORT = process.env.PORT;
const app = express();
app.use(express.json())
app.use(cors());
app.use(router);

db().then(()=> console.log("Connection Ready"))
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));