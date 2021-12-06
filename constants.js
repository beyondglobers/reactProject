const path = require('path');

const UPLOAD_FILES_DIR = path.join(__dirname,'client','public','uploads');
const IMAGES_FILES_DIR = path.join(__dirname,'client','src','images');
const mongodburl = "mongodb+srv://beyondglobers:Facil123.*@cluster0.utq9n.mongodb.net/stockUpdate2?retryWrites=true&w=majority";

module.exports = {
    UPLOAD_FILES_DIR: UPLOAD_FILES_DIR,
	IMAGES_FILES_DIR: IMAGES_FILES_DIR,
    mongodburl:mongodburl
};