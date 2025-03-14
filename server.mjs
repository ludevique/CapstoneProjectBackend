//--------------------------------------Setting up my server------------------------------------------------------------------------------
import express from 'express';
import bodyParser from 'body-parser';
import routeCourse from './Routes/Course.mjs';
import courseData from './utilities/data.mjs';
import cors from 'cors'

//-----------------------Create my App using the express object-----------------------------------------------------------------------------
const App = express ();

//--------------------------Specify the PORT of my application which i will set to '3000'---------------------------------------------------
const PORT = 3000;

//---------import my connectDB function to my server file-------------------------------------------------------------------------------
import { connectDB } from './db/connec.mjs';
import Course from './Models/CoursesModel.mjs';
connectDB()

//--------------------Specify we are going to used JSON data in our application--------------------------------------------------------------
 App.use(bodyParser.json())
//App.use(express.json());
App.use(cors())

//testing if it works on my localhost
App.get('/', (req,res) => {
    res.send('welcome to my server side application')
})


//----------------------------------------------------------------------------------------------------------------------------------------
 //  ----------commented this lines after populated my database and want to avoid someone access to it!
// Seed route----------------------------
App.get('/seed',(async (req, res) => {
    try {
        await Course.deleteMany({});//deleted all files in my course's collection
        await Course.create(courseData)
        //res.send('seeding database')
        res.status(200).json({msg: "successfully created"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'I am Reptar! Here me ERAWWWWWR!!!!!!'});

    }
}))
//------------------------------------------------------------------------------------------------------------------------------------------

//----------------Setting my middleware-----------------------------------------------------------------------------------------------------
App.use('/course', Course)
App.use('/front/catalog', routeCourse);

//--------------Make our app listening to for incoming request-------------------------------------------------------------------------------
App.listen(PORT, (err) => {
    if(err) {res.status(500).send(`server is not working`)

    }else console.log(`server is running`);
})





