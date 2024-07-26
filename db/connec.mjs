//--------------------------Connecting my server with my database--------------------
  //----First import mongoose to interact with my database--------------
import mongoose from "mongoose";
  //-----------Set dotenv to load variables i have inside the file--------------
import dotenv from 'dotenv';
  //------------Loading my hidden variables from the .env file into my app------------
dotenv.config()


//---------------Create a function which will helps me to display or check  whether my app is connect or not-------
export function connectDB () {
    mongoose.connect(process.env.ATLAS_URI);

    const conn = mongoose.connection;
    conn.on("error", (e) => console.error(e));
    conn.on('open', () => console.log('successfully connected to the database'));
    conn.on('close', () => console.log('disconnected to database'))
} 