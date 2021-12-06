// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
// const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require('./routes/api');

const fs = require('fs');

var constants = require('./constants');

const UPLOAD_FILES_DIR = constants.UPLOAD_FILES_DIR;
const IMAGES_FILES_DIR = constants.IMAGES_FILES_DIR;
const mongodburl = constants.mongodburl;

var url = mongodburl;
// var url = 'mongodb://localhost:27017/stockUpdate2';

if (!fs.existsSync(UPLOAD_FILES_DIR)) {    //check if folder already exists
  console.log(UPLOAD_FILES_DIR, " does't exist");
  fs.mkdirSync(UPLOAD_FILES_DIR);    //creating folder
}
if (!fs.existsSync(IMAGES_FILES_DIR)) {    //check if folder already exists
  console.log(IMAGES_FILES_DIR, " does't exist");
  fs.mkdirSync(IMAGES_FILES_DIR);    //creating folder
}


// function checkCreateUploadsFolder(uploadsFolder) {

//   console.log(uploadsFolder);

//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir, { recursive: true });
//   }

// }


// Step 2
// mongoose.connect('mongodb://localhost:27017/stockUpdate2', {
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('connected to mongodb'))
  .catch(() => {
    console.log('error connecting to mongodb');
  });
// mongoose.connect('mongodb://localhost:27017/stock', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));

// Step 3

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);



app.listen(PORT, console.log(`Server is starting at ${PORT}`));