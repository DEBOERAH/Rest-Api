const express = require('express');
const mongoose = require('mongoose');
const Studentslearnroutes = require('./routes/StudentslearnRoutes');




// conection string
mongoose.connect('mongodb+srv://Adaezeofuani:Adaeze@cluster0.0npnn.mongodb.net/GMC-backlearn?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
    const app = express();


    // add Middleware
    app.use(express.json());
    

    // connect to routes
    app.use('/', Studentslearnroutes);

    const port = 1301;

    app.get('/api', (req, res) => {
        res.send('Hello World!');
    })


    //listen for requests
    app.listen( 1301, () => {
        console.log('SERVER IS LISTENING ON PORT http://localhost:1301/api');
    })






})
    .catch((error) => {
        console.log(error);
    })








