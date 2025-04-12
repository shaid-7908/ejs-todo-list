const express =require('express')
const studentController = require('../controller/studentController')

const studentRouter = express.Router()

studentRouter.post('/student',studentController.registerStudent)
studentRouter.get('/',studentController.homepage)

module.exports = studentRouter