import "dotenv/config";

import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`);
        });
        app.on("error", (error) => {
            console.log(error);
            throw error;
        });
    })
    .catch((error) => {
        console.log(`Mongo DB connection error || ${error}`);
    });


    
/* BAD PRACTICE
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log(error);
            throw error
         })

         app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`);

          })
    } catch (error) {
        console.log(error);
        throw error;
    }
})();

*/
