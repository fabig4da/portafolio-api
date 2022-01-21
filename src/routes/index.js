const router = require('express')();
const {templateRoutes} = require('./template');
const {techRoutes} = require('./tech');
const {messageRoutes} = require('./message');
const {workRoutes} = require('./work');
const {authRoutes} = require('./auth');
const {userRoutes} = require('./user');
const fileupload = require('express-fileupload');

router.use(fileupload({
    useTempFiles : true
}))

router.use('/template', templateRoutes);
router.use('/tech', techRoutes);
router.use('/message', messageRoutes);
router.use('/work', workRoutes);
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports= router;