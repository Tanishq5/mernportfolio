import mongoose from "mongoose";
import { connected } from "process";

export const connectDatabase = () => {
    mongoose.connect(process.env.DB).then((c) => {
        console.log("Database connected");
    }).catch((e) => {
        console.log(e)
    })
}