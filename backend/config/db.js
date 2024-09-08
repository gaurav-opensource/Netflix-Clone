import mongoose from "mongoose";

import { ENV_VARS } from "./envVars.js";

export const connectDB = async()=>{

    try{
        const conn = await mongoose.connect(ENV_VARS.MONGO_URL);
        console.log("MongoDB connected to " + conn.connection.host);

    } catch(error){
        console.error("Error connecting to MongoDB :" + error.message);
        process.exit(1);  // 1 means error and 0 means pass
        
    }
};