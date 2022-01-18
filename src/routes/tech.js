const { Router } = require('express');
const { check } = require('express-validator');
const { expressValidatorErrors } = require('../middlewares/globals');
const techController = require('../controllers/tech');

const techRoutes = Router();

techRoutes.get('/', techController.findAll);
techRoutes.get('/:tid', techController.findOneById);
techRoutes.post('/',
    [
        check('name', 'name is required').notEmpty().isString(),
        check('color', 'color is required').notEmpty().isString(),
        // check('img', 'img is required').notEmpty().isString(),
        expressValidatorErrors

    ],
    techController.create);
techRoutes.put('/:tid', techController.edit);
techRoutes.delete('/:tid', techController.delete);
techRoutes.put('/restore/:tid', techController.restore);
techRoutes.put('/img/:tid', techController.editImage);





module.exports = { techRoutes };