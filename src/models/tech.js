const {model, Schema} = require('mongoose');

const techScehema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    color: {
        type: String
    },
    state: {
        type: Boolean,
        required: true,
        default: true
    }
    
});

module.exports= model('tech', techScehema);