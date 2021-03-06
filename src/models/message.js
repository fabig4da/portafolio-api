const {model, Schema} = require('mongoose');

const messageScehema = new Schema({
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    msg: {
        type: String
    },
    state: {
        type: Boolean,
        required: true,
        default: true
    }    
});

module.exports= model('mesagge', messageScehema);