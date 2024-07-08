const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'video/mp4') {
            cb(null, "./public/data/videos");
        } else
            cb(null, "./public/data/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})


let uploadFile = multer({
    storage: storage,
    // limits: { fileSize: maxSize },
}).single("file");
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;