const express = require ('express')
const cors = require ('cors')
const { db } = require('./db/db')
const { readdirSync } = require ('fs')              //read the files of the mentioned directory
const app = express()                               // app is being used to call the methods comming from express


require('dotenv').config()                          // requires to import env
const PORT = process.env.PORT                    // setting up the port

  
//middlewares
app.use(express.json())                         // to convert the data into json
app.use(cors())

app.get('/', (req,res)=>{                       //to get the home page and check server working or not throught postman
    res.send('hello world')                     //sending reponse once we get to the home page 
})

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))      //SETTING BASE API


const server = () => {
    db();
    app.listen(PORT, () => {
        console.log("listeing to port: ",PORT)
    })

}

server();
