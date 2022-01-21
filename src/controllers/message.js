const messageRepository = require('../repositories/message');
const { sendEmail } = require('../utils/email');
const { succesfulResponse, unSuccesfulResponse } = require('../utils/response');

const messageController = {
    findAll: async (req, res) => {
        try {
            const messages = await messageRepository.findAll({ state: true });
            succesfulResponse(res, messages);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    findOneById: async (req, res) => {
        const { tid } = req.params;
        try {
            const message = await messageRepository.findOne(tid);
            succesfulResponse(res, message);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    create: async (req, res) => {
        const { body } = req;
        try {
            const messages = await messageRepository.create(body);
            await sendEmail(body.subject, body.msg, body.email);
            succesfulResponse(res, messages);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },
    edit: async (req, res) => {
        const { tid } = req.params;
        const { body } = req;
        try {
            const messages = await messageRepository.edit(tid, body);
            succesfulResponse(res, messages);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    delete: async (req, res) => {
        const { tid } = req.params;
        try {
            const messages = await messageRepository.delete(tid);
            succesfulResponse(res, messages);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    restore: async (req, res) => {
        const { tid } = req.params;
        try {
            const messages = await messageRepository.restore(tid);
            succesfulResponse(res, messages);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    }

}


module.exports = messageController;