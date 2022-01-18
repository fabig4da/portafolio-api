const {model, Schema} = require('mongoose');

const templateScehema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    url: {
        type: String
    },
    state: {
        type: Boolean,
        required: true,
        default: true
    }

    
});

module.exports= model('template', templateScehema);