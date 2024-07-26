import mongoose from 'mongoose'

//------------------make the schema for the course model-------------
const CourseSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true,
    },
    Description:{
        type: String,
        required:true,
    },
    url:{
        type: String,
        requred: true
    },
    // id:{
    //      type:String,
    //      required:true,
    //      unique:true
    //  }
})

export default new mongoose.model('Course', CourseSchema)

