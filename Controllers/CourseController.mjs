//import the schema
import Course from '../Models/Courses.mjs'

//For my controller i will have to create an object that will hold all my CRUD operations--------------------------

const CourseController = {
    //create a new course for POST method
    createCourse: async (req, res) => {
        try {
            // take informations of the request base on my model schema and use it to create a new course 
            const newCourse = new Course(req.body);
            await newCourse.save()
            res.status(201).json(newCourse)
        }catch(error) {
            res.status(400).json({ message:error.message})
        }
    },
    //read course 
    readCourse: async(req,res) => {
        try {
            const courses = await Course.find();
            res.json( courses)
        }catch (error) {
            res.status(500).json({message: 'server not responding'})
        }
    },
    //Update course by id
     updateCourse: async( req, res) => {
        const myId = "66a15de826a179a34d372bfb"

         try {
             const updatedCourse = await Course.findByIdAndUpdate(myId, req.body)
             
             //set the condition to update the course
             if(!updatedCourse){
                  return  res.status(200).json({message: 'updated'})
               // return res.status(404).json({message: "course not found"})
             }
         }catch (error) {
            res.status(400).json({message: error.message})
         }
     },
    //delete course id
    deleteCourse: async (req, res) => {
        try {
            const deleteCourse = await Course.findByIdAndDelete(req.body.id)
            if (!deleteCourse) 
                return 
                    res.status(404).json({message: 'Course not founded'});
                    res.status(200).json({message: 'successfully delete'})
        }catch (error) {
            res.status(500).json({message: 'server not responding'})
        }
    }
}

export default CourseController
