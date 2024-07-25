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

         try {
             const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body)
             
             //set the condition to update the course
             if(!updatedCourse) {
                return res.status(404).json({message: 'course not found'});
             }
             
             //response with success
             res.status(200).json({message: 'course updated successfully'})
         }catch (error) {
            res.status(400).json({message: error.message})
         }
     },
    //delete course id
    deleteCourse: async (req, res) => {
        try {
            const deletedCourse = await Course.findByIdAndDelete(req.params.id)
            //check if no course was found to delete
            if (!deletedCourse) {
                return res.status(404).json({message: 'Course not founded'});
            } 
            //in case of course found and deleted    
            res.status(200).json({message: 'course successfully deleted'})
            
        }catch (error) {
            res.status(500).json({message: 'server not responding'})
        }
    }
}

export default CourseController
