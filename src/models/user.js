const {model, Schema} = require('mongoose');

const userScehema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    profession: {
        type: String
    },
    profile: {
        type: String
    },
    sumary: {
        type: String
    },
    greeting: {
        type: String
    },
    rol: {
        type: String
    }
    
});

module.exports= model('user', userScehema);