const express = require('express')
const router = express.Router()


router.get('/',(request,response)=>{
    response.status(200).send("This is student router")
})


module.exports = router