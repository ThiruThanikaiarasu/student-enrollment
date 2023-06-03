require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3500
const students = require('./routers/students')
const mongoose = require("mongoose")   // schema validator 

app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))   // Event emitter
db.once('open',()=>console.log("Connection Established"))   // 

app.get('/',(request,response)=>{
    response.status(200).send("This is app.js")
})

app.use('/api/v1/students',students)

app.listen(PORT,console.log(`The server is running at http://localhost:${PORT}`))

