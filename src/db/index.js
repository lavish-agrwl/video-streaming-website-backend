import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        );
        console.log(
            `DB connection succesful ${connectionInstance.connection.host}`
        );
    } catch (connectionError) {
        console.log("MongoDB connection error.");
        // throw connectionError
        process.exit(1);
    }
};

export default connectDB;
