const express = require('express')
const app = express();
const controller = require('./controllers/controller.js')

app.set("view engine","ejs")

app.use(express.static("./public"))

controller(app)

app.listen(3000,(err)=>{
    if(!err)
        console.log("Port 3000 conected !!!")
    else
        console.log("Failed"+err)
})

