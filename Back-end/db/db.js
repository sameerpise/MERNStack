import mongoose from "mongoose"

 export const dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"Hotel",
    }).then(()=>{
        console.log("connetion sucessfully")
    }).catch((err)=>{
        console.log(`not conneted ${err}`)
    })
}
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Databse',{

// }).then(()=>{
//     console.log("connection sucessfull")
// }).catch((error)=>{
//     console.log(error)
// })