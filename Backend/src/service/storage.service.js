const ImageKit = require("@imagekit/nodejs");
require("dotenv").config();

const imagekit = new ImageKit({
     
    privateKey: process.env.Image_kit_privatekey, 
    publicKey: process.env.Image_kit_publicKey,
    urlEndpoint:process.env.Image_kit_urlEndpoint

})
async function uploadFile(buffer) {

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })
    return result;
}

module.exports = uploadFile;