import mongoose from "mongoose";

export const connectDatabase = () => {
    mongoose.connect(process.env.DB).then((c) => {
        console.log(`Mongodb connect to: ${c.connection.host}`);
    }).catch((e) => {
        console.log(e)
    })
}