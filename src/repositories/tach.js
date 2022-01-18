const Tech = require('../models/tech');


const techRepository= {
    findAll: async(params)=>{
        return await Tech.find(params);
        
    },
    findOne: async(tid)=>{
        return await Tech.findOne({_id: tid});
    },
    edit: async(tid, data)=>{
        return await Tech.findOneAndUpdate({_id:tid}, data, {new: true});
    },
    create: async(data)=>{
        const newTech = new Tech(data);
        return await newTech.save();
    },
    delete: async(tid)=>{
        const techFound = await Tech.findOne({_id: tid});
        techFound.state =  false;
        return await techFound.save();
    },
    restore: async(tid)=>{
        const techFound = await Tech.findOne({_id: tid});
        techFound.state =  true;
        return await techFound.save();
    }
    
}


module.exports = techRepository;