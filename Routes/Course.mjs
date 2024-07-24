import CourseController from "../Controllers/CourseController.mjs";
import express, { Router } from 'express'
// Use the express library imported to build my CRUD operations
const router = express.Router()

router.post('/', CourseController.createCourse)//from the controllercourse file we just access the http method we want by calling the function that hold it.
 



export default router