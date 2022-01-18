const templateRepository = require('../repositories/template');
const { succesfulResponse, unSuccesfulResponse } = require('../utils/response');
const {uploadImage, deleteImage} = require('../utils/image');

const templateController = {
    findAll: async(req, res)=>{
        try {
        const templates = await templateRepository.findAll({state: true});
            succesfulResponse(res, templates);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    findOneById: async(req, res)=>{
        const {tid} = req.params;
        try {
        const template = await templateRepository.findOne(tid);
            succesfulResponse(res, template);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    create: async(req, res)=>{
        const {body} = req;
        try {
        const templates = await templateRepository.create(body);
            succesfulResponse(res, templates);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },
    edit: async(req, res)=>{
        const {tid} = req.params;
        const {body} = req;
        try {
        const templates = await templateRepository.edit(tid,body);
            succesfulResponse(res, templates);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    delete: async(req, res)=>{
        const {tid} = req.params;
        try {
        const templates = await templateRepository.delete(tid);
            succesfulResponse(res, templates);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    restore: async(req, res)=>{
        const {tid} = req.params;
        try {
        const templates = await templateRepository.restore(tid);
            succesfulResponse(res, templates);
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
            const work = await templateRepository.findOne(tid);
            if (work.img){
                deleteImage(work.img);
            }
            work.img = imgName;
            await work.save()
            succesfulResponse(res, work);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },

}


module.exports = templateController;