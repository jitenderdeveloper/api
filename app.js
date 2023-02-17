const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors')

// const UserRouter = require('./api/routes/User')
const FormRouter = require('./api/routes/FormRoute')
const MeetingRouter = require('./api/routes/meetingForm')



// --mongoose-connection----
const mongoose = require('mongoose');
const url = 'mongodb+srv://Jitender:k5SF3x9KUwam6GEa@testcluster.jennqio.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', (error)=>{
    console.log('connection failed...')
});
mongoose.connection.on('connected', (connected)=>{
    console.log('connection successfuly...');
});
// --mongoose-connection----


app.use(cors())

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



// app.use('/user', UserRouter)
app.use('/', FormRouter)
app.use('/meeting', MeetingRouter)


app.use((req, res)=>{
    res.status(404).json({ 
        error: 'bad request'
    })
})

// 39KRJt8Efkcl8nJC password

module.exports = app;