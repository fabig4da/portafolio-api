const workteRepository = require('../repositories/work');
const { uploadImage, deleteImage } = require('../utils/image');
const { succesfulResponse, unSuccesfulResponse } = require('../utils/response');

const workController = {
    findAll: async (req, res) => {
        try {
            const work = await workteRepository.findAll({ state: true });
            succesfulResponse(res, work);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    findOneById: async (req, res) => {
        const { tid } = req.params;
        try {
            const work = await workteRepository.findOne(tid);
            succesfulResponse(res, work);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    create: async (req, res) => {
        const { body } = req;
        try {
            const work = await workteRepository.create(body);
            succesfulResponse(res, work);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },
    edit: async (req, res) => {
        const { tid } = req.params;
        const { body } = req;
        try {
            const work = await workteRepository.edit(tid, body);
            succesfulResponse(res, work);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    delete: async (req, res) => {
        const { tid } = req.params;
        try {
            const work = await workteRepository.delete(tid);
            succesfulResponse(res, work);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    restore: async (req, res) => {
        const { tid } = req.params;
        try {
            const work = await workteRepository.restore(tid);
            succesfulResponse(res, work);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    editImage: async (req, res) => {
        const { tid } = req.params;
        const {img} = req.files;
        const tempPath = img.tempFilePath;
        try {
            const imgName = await uploadImage(tempPath);
            const work = await workteRepository.findOne(tid);
            if (work.img){
                deleteImage(work.img);
            }
            work.img = imgName;
            await work.save()
            succesfulResponse(res, work);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },

}


module.exports = workController;