const router = require('express')();
const {templateRoutes} = require('./template');
const {techRoutes} = require('./tech');
const {messageRoutes} = require('./message');
const {workRoutes} = require('./work');
const fileupload = require('express-fileupload');

router.use(fileupload({
    useTempFiles : true
}))

router.use('/template', templateRoutes);
router.use('/tech', techRoutes);
router.use('/message', messageRoutes);
router.use('/work', workRoutes);

module.exports= router;