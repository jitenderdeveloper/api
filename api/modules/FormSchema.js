const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    boy: {
        type: String,
    },
    girl: {
        type: String,
    },
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true,
        index: {
          unique: true,
        },
        match:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },
    phone:{
        type: Number,
        require: true
    },
    other_phone:{
        type: Number,
        require: true
    },
    country:{
        type: String,
        require: true
    },
    state:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    pin_code:{
        type: Number,
        require: true
    },

})

module.exports = mongoose.model('FromData', FormSchema)