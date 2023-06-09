const studentModel = require('../models/students')


const getAllStudents = async (request,response)=>{
    const students = await studentModel.find();
    try{
        response.status(200).json(students)
    }
    catch(error){
        response.send(500).json({message : error.message})
    }
}


const addAStudent = async (request,response)=>{
    const newStudent = new studentModel({
        name : request.body.name,
        enrollDepartment :request.body.enrollDepartment,
        enrollmentDate : request.body.enrollmentDate
    })
    try{
        const student = await newStudent.save()
        response.json(student)
    }
    catch(error)
    {
        response.json({errorMessage : error.message})
    }
    
}

const getAStudent = (request,response)=>{
    response.status(200).json(response.student)
}


const updateAStudent = async(request,response)=>{
    if(request.body.name != null)
    {
        response.student.name = request.body.name
    }

    if(request.body.enrollDepartment != null)
    {
        response.student.enrollDepartment = request.body.enrollDepartment
    }

    try{
        const updatedStudent = await response.student.save()
        response.status(200).json(updatedStudent)
    }
    catch(error){
        response.status(500).json({message : error.message})
    }
}

const deleteAStudent = async(request,response)=>{
    try{
        await response.student.deleteOne();
        response.json({message : `Deleted the user ${response.student.name}`}) // why not status ???
    }
    catch(error){
        response.status(500).json({message : error.message})
    }
}

async function getStudent(request,response,next){
    let student
    try{
        student = await studentModel.findById(request.params.id)
        if(student == null)
        {
            return response.status(500).json({message: error.message})
        }
    }
    catch(error){
        return response.status(500).json({message : error.message})
    }
    response.student = student
    next()
}


module.exports = {
    getAllStudents,
    addAStudent,
    getAStudent,
    updateAStudent,
    deleteAStudent,
    getStudent,       // function to find data by id


}