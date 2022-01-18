const {Router} = require('express');
const messageController = require('../controllers/message');

const messageRoutes = Router();

messageRoutes.get('/', messageController.findAll);
messageRoutes.get('/:tid', messageController.findOneById);
messageRoutes.post('/', messageController.create);
messageRoutes.put('/:tid', messageController.edit);
messageRoutes.delete('/:tid', messageController.delete);
messageRoutes.put('/restore/:tid', messageController.restore);





module.exports = {messageRoutes};