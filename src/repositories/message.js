const Message = require('../models/message');


const messageRepository= {
    findAll: async(params)=>{
        return await Message.find(params);
    },
    findOne: async(tid)=>{
        return await Message.findOne({_id: tid, state: true});
    },
    edit: async(tid, data)=>{
        return await Message.findOneAndUpdate({_id:tid}, data);
    },
    create: async(data)=>{
        const newMessage = new Message(data);
        return await newMessage.save();
    },
    delete: async(tid)=>{
        const messageFound = await Message.findOne({_id: tid});
        messageFound.state =  false;
        return await messageFound.save();
    },
    restore: async(tid)=>{
        const messageFound = await Message.findOne({_id: tid});
        messageFound.state =  true;
        return await messageFound.save();
    }
}


module.exports = messageRepository;