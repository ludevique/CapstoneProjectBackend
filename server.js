//--------------------------------------Setting up my server------------------------------------------------------------------------------
import express from 'express'
import bodyParser from 'body-parser';

//-----------------------Create my App using the express object-----------------------------------------------------------------------------
const App = express ();
//--------------------------Specify the PORT of my application which i will set to '3000'---------------------------------------------------
const PORT = 3000;
//--------------------Specify we are going to used JSON data in our application--------------------------------------------------------------
App.use(bodyParser.json())
//--------------Make our app listening to for incoming request-------------------------------------------------------------------------------
App.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))