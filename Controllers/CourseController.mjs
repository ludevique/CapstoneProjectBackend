//import the schema
import Course from '../Models/Courses.mjs'

//For my controller i will have to create an object that will hold all my CRUD operations--------------------------

const CourseController = {
    //create a new course
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
    //Update course
    //updateCourse:
    //delete course
}

export default CourseController
