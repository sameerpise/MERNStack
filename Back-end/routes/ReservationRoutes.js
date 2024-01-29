import express from "express";
import { sendServation } from "../controller/Reservation.js";
const router = express.Router();

router.post('/send',sendServation);

export default router;