const Template = require('../models/template');


const templateRepository= {
    findAll: async(params)=>{
        return await Template.find(params);
        
    },
    findOne: async(tid)=>{
        return await Template.findOne({_id: tid});
    },
    edit: async(tid, data)=>{
        return await Template.findOneAndUpdate({_id:tid}, data, {new: true});
    },
    create: async(data)=>{
        const newTemplate = new Template(data);
        return await newTemplate.save();
    },
    delete: async(tid)=>{
        const templateFound = await Template.findOne({_id: tid});
        templateFound.state =  false;
        return await templateFound.save();
    },
    restore: async(tid)=>{
        const templateFound = await Template.findOne({_id: tid});
        templateFound.state =  true;
        return await templateFound.save();
    }
}


module.exports = templateRepository;