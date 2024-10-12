
import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import userRouter from "./routes/userRoute.js"
import authRouter from "./routes/userRoute.js"
env.config();
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('database connected');
    
})



app.listen(port,() => {
    console.log(`server is running on port ${port}`);

});


app.use('/api/auth/',authRouter);
app.use('/api/user/',userRouter);