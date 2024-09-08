import express from "express";

const app = express();

import authRoute from "./routes/auth.route.js"
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
const PORT = ENV_VARS.PORT;


app.use(express.json());

app.use("/api/v1/auth" , authRoute);   //path /api/v1/auth

app.listen(PORT, ()=>{
    
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})
