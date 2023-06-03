const express = require('express')
const router = express.Router()
const {getAllStudents, addAStudent, getAStudent, updateAStudent, deleteAStudent, getStudent } = require('../controllers/students')

// db is external dependency so we use async

router.route('/').get(getAllStudents).post(addAStudent)

router.route('/:id').get(getStudent, getAStudent).patch(getStudent, updateAStudent).delete(getStudent, deleteAStudent)


module.exports = router