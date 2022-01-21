const techRepository = require('../repositories/tach');
const { uploadImage, deleteImage } = require('../utils/image');
const { succesfulResponse, unSuccesfulResponse } = require('../utils/response');

const techController = {
    findAll: async(req, res)=>{
        try {
        const tech = await techRepository.findAll({state: true});
            succesfulResponse(res, tech);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    findOneById: async(req, res)=>{
        const {tid} = req.params;
        try {
        const tech = await techRepository.findOne(tid);
            succesfulResponse(res, tech);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    create: async(req, res)=>{
        const {body} = req;
        const img =  req.files?.img.tempFilePath
        try {
            if(img){
                body.img = await uploadImage(img);
            }
                
        const tech = await techRepository.create(body);
            succesfulResponse(res, tech);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },
    edit: async(req, res)=>{
        const {tid} = req.params;
        const {body} = req;
        console.log(body)
        try {
        const tech = await techRepository.edit(tid,body);
            succesfulResponse(res, tech);
        } catch (error) {
            console.log(error)
            unSuccesfulResponse(res);
        }
    },
    delete: async(req, res)=>{
        const {tid} = req.params;
        try {
        const tech = await techRepository.delete(tid);
            succesfulResponse(res, tech);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    restore: async(req, res)=>{
        const {tid} = req.params;
        try {
        const tech = await techRepository.restore(tid);
            succesfulResponse(res, tech);
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
            const work = await techRepository.findOne(tid);
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


module.exports = techController;