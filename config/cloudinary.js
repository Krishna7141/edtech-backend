const cloudinary = require('cloudinary').v2

exports.cloudnairyConnect= ()=>{
    try {
        cloudinary.config({
            cloud_name : process.env.CLOUD_NAME,
            api_key : process.env.API_KEY,
            api_secret : process.env.API_SECRET,
        })
        console.log("Cloudinary Connection: SUCCESS");
    } catch (error) {
        console.log("Cloudinary Connection: ERROR", error)
    }
}