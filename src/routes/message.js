const { Router } = require('express');
const { check } = require('express-validator');
const { expressValidatorErrors } = require('../middlewares/globals');
const messageController = require('../controllers/message');

const messageRoutes = Router();

messageRoutes.get('/', messageController.findAll);
messageRoutes.get('/:tid', messageController.findOneById);
messageRoutes.post('/',
    [
        check('email', 'invalid email').isEmail(),
        check('subject', 'subject is required').notEmpty(),
        check('msg', 'msg is required').notEmpty(),
        expressValidatorErrors
    ]
    , messageController.create);
messageRoutes.put('/:tid', messageController.edit);
messageRoutes.delete('/:tid', messageController.delete);
messageRoutes.put('/restore/:tid', messageController.restore);





module.exports = { messageRoutes };