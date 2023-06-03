const express = require('express')
const router = express.Router()
const studentModel = require('../models/students')

router.get('/',async (request,response)=>{
    const students = await studentModel.find();
    try{
        response.status(200).json(students)
    }
    catch(error){
        response.send(500).json({message : error.message})
    }
})


module.exports = router