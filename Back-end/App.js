import express from "express";
import cors from "cors"
import  dotenv  from "dotenv";
import { errorMidlware } from './error/error.js'
import ReservationRoutes from './routes/ReservationRoutes.js'
import { dbconnection } from './db/db.js'

const app= express();

dotenv.config({path:"./config/config.env"})
app.use(cors({
    origin:[process.env.FORNTEND_URL],methods:["Post"],credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/reservation',ReservationRoutes)
app.use(errorMidlware);
dbconnection();
export default app;