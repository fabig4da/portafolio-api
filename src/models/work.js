const {model, Schema} = require('mongoose');

const workScehema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    description: {
        type: String
    },
    technologies: {
        type: Array
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

module.exports= model('work', workScehema);