//--------------------------------------Setting up my server------------------------------------------------------------------------------
import express from 'express'
import bodyParser from 'body-parser';
import Course from './Routes/Course.mjs'

//-----------------------Create my App using the express object-----------------------------------------------------------------------------
const App = express ();

//--------------------------Specify the PORT of my application which i will set to '3000'---------------------------------------------------
const PORT = 3000;

//---------import my connectDB function to my server file-------------------------------------------------------------------------------
import { connectDB } from './db/connec.mjs';
connectDB()

//--------------------Specify we are going to used JSON data in our application--------------------------------------------------------------
App.use(bodyParser.json())

//testing if it works on my localhost
App.get('/', (req,res) => {
    res.send('welcome to my server side application')
})

//----------------Setting my middleware--------------------
App.use('/course', Course)

//--------------Make our app listening to for incoming request-------------------------------------------------------------------------------
App.listen(PORT, (err) => {
    if(err) {res.status(500).send(`server is not working`)

    }else console.log(`server is running`);
})