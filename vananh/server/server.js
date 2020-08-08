const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv/config')

app.use(bodyParser.json())

const tourRoute = require('./routes/tourRouter')

app.use('/tours', tourRoute)

mongoose.connect(process.env.DB_CONNECTION, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Connected to mongoDB"))
    .catch((err)=>console.log(err))


app.listen(4000);