const { Router } = require('express');
const templateController = require('../controllers/template');
const { loadImage } = require('../middlewares/globals');

const templateRoutes = Router();

templateRoutes.get('/', templateController.findAll);
templateRoutes.get('/:tid', templateController.findOneById);
templateRoutes.post('/',
    [
        loadImage
    ]
    , templateController.create
);
templateRoutes.put('/:tid', templateController.edit);
templateRoutes.delete('/:tid', templateController.delete);
templateRoutes.put('/restore/:tid', templateController.restore);
templateRoutes.put('/img/:tid', templateController.editImage);





module.exports = { templateRoutes };