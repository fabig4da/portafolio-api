const {v2:cloudinary} = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME_DINARY,  
    api_key: process.env.API_KEY_DINARY, 
    api_secret: process.env.API_SECRET_DINARY,
    secure: true
});

const uploadImage =async (file) => {
        const resp = await cloudinary.uploader.upload(file);
        return resp.secure_url;
}


const deleteImage = async (imageUrl) => {
    const imageUrlSplited = imageUrl.split('/');
    const imageName = imageUrlSplited[imageUrlSplited.length-1];
    const [id] = imageName.split('.');
    const resp = await cloudinary.uploader.destroy(id);
    return resp;
}

module.exports = {uploadImage, deleteImage};