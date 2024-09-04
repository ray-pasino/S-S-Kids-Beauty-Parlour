const express = require('express')
const cors = require('cors');
const sendMailrouter = require('./routes/sendmailroutes');


//app config
const app = express()
const PORT = 4000


//middleware
app.use(express.json())
  app.use(cors({
    origin: ['http://localhost:5173'],  // Allow requests from this origin
    credentials: true, // Allow credentials (e.g., cookies) to be sent in requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    headers: ['Content-Type', 'Authorization'] // Allow these headers
  }))


  //api endpoint
  app.use("/api", sendMailrouter)

app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT}...`)
})