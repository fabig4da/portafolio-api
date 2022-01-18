const Work = require('../models/work');


const workRepository= {
    findAll: async(params)=>{
        return await Work.find(params);
        
    },
    findOne: async(tid)=>{
        return await Work.findOne({_id: tid});
    },
    edit: async(tid, data)=>{
        return await Work.findOneAndUpdate({_id:tid}, data, {new: true});
    },
    create: async(data)=>{
        const newWork = new Work(data);
        return await newWork.save();
    },
    delete: async(tid)=>{
        const workFound = await Work.findOne({_id: tid});
        workFound.state =  false;
        return await workFound.save();
    },
    restore: async(tid)=>{
        const workFound = await Work.findOne({_id: tid});
        workFound.state =  true;
        return await workFound.save();
    },

}


module.exports = workRepository;