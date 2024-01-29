import express from 'express';
import { mongoose } from 'mongoose';
import validator from 'validator';

const reservationschema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,'First name conatine atleast 3 letters'],
        maxlength:[30,'First name conatine atleast 3 letters']
    },
    LastName:{
        type:String,
        required:true,
        minlength:[3,'First name conatine atleast 3 letters'],
        maxlength:[30,'Last name conatine atleast 3 letters']
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,'Provide valid Email']
    },
    phone:{
        type:String,
        required:true,
        minlength:[1,'Phone number conatine atleast 3 letters'],
        maxlength:[11,'phone number conatine max 11 letters']
    },
    time:{
        type:String,
        required:true
        
    },
    date:{
        type:String,
        required:true
        
    }
});
export const Reservation = mongoose.model("Reservation",reservationschema)