const express = require('express'); //framework of node js
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express(); // starting express

// Connecting database 
const url= "mongodb+srv://Nutika:Nutika123@cluster0.ylwuewe.mongodb.net/?retryWrites=true&w=majority";
module.exports = url;
mongoose.connect(url);
mongoose.connect(url).then(()=>{
    console.log("Databases Connected");
}).catch((err)=>{
    console.log(err);
    console.log("Couldn't connect to MongoDB");
})
  

app.use(express.json());

// importing Routers
const StudentRouter = require('./Routes/students')
app.use('/students', StudentRouter);

app.listen(3000,()=>{
    console.log('Server started');
})



