const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv/config')

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

const tourRoute = require('./routes/tourRouter')
const userRoute = require('./routes/userRouter')
app.use('/users', userRoute)
app.use('/tours', tourRoute)


mongoose.connect(process.env.DB_CONNECTION, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Connected to mongoDB"))
    .catch((err)=>console.log(err))


app.listen(4000);