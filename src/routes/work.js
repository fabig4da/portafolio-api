const {Router} = require('express');
const workController = require('../controllers/work');

const workRoutes = Router();

workRoutes.get('/', workController.findAll);
workRoutes.get('/:tid', workController.findOneById);
workRoutes.post('/', workController.create);
workRoutes.put('/:tid', workController.edit);
workRoutes.delete('/:tid', workController.delete);
workRoutes.put('/restore/:tid', workController.restore);
workRoutes.put('/img/:tid', workController.editImage);





module.exports = {workRoutes};