import { error, time } from "console";
import Errorhandler from "../error/error.js";
import {Reservation} from '../Modules/reservationScheema.js'

export const sendServation = async(req,res,next) => {
    const{firstName,LastName,email,phone,date,time}=req.body;
    if(!firstName ||!LastName || !email || !phone || !date || !time)
    {
       return next(new Errorhandler("please fill full form",400))
    }
    try{
        await Reservation.create({firstName,LastName,email,phone,time,date});
        res.status(201).json({
            success:true,
            message:"Reservation send successfully",
        })
    }catch(error){
        if(error.name === "ValidationError")
        {
            const validationError = Object.values(error.errors).map((err)=>err.message)
            return next(new Errorhandler(validationError.join(","),400))
        }
       
    }
   
}