// require('dotenv').config({path: './env'});

import dotenv from "dotenv"
dotenv.config({path: './.env'})

import connectDb from "./db/index.js"
connectDb()
.then(()=>{
    //express wla kaam hoga yha pe
    app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});//started the server

app.on("error", (error)=>{
    console.log("Error: some error occured on the app side ", error);
});//even listener on the error

})
.catch((error)=>{
    console.error("Error connecting to the database: ", error);
    process.exit(1);
}
);
/*
import express from "express"
import mongoose from "mongoose"
import {DB_NAME} from "./constants"

const app = express();
//as talking to the database laways takes time, we will need ot use async await
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.error("Error: ", error);
            throw error;
        }
        )

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    }
    catch(error){
        //agar database connnect nahi hua to
        console.error("Error: ", error);
        throw error;
    }
})();

Pros and Cons of this approach:
pro1) since db is in another continent so it may take time to connect, so we used async await
pro2) errors of app also handled

con1) we have loaded this index.js file too much.
 */
