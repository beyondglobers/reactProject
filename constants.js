const path = require('path');

const UPLOAD_FILES_DIR = path.join(__dirname,'client','public','uploads');
const IMAGES_FILES_DIR = path.join(__dirname,'client','src','images');

module.exports = {
    UPLOAD_FILES_DIR: UPLOAD_FILES_DIR,
	IMAGES_FILES_DIR: IMAGES_FILES_DIR
};