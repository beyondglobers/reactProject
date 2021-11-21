const express = require('express');

const router = express.Router();

// const BlogPost = require('../models/BlogPost');

// const stock = require('../models/stock');

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

const mongoose2 = require('mongoose');
mongoose2.connect('mongodb://localhost:27017/stockUpdate2', { useNewUrlParser: true, useUnifiedTopology: true });

const stockSchema = require('../models/stock');
const stock = mongoose2.model('stock', stockSchema);

////// formidable and multer
// youtube.com/watch?v=jtCfvuMRsxE

const Formidable = require('formidable');
const bluebird = require('bluebird');
// const fs = bluebird.promisifyAll(require('fs'));
const fs = require('fs');
const path = require('path');

const multer = require("multer");
const extract = require('extract-zip');

// constants
// var constants = require(path.join(path.resolve(__dirname, '..'),'constants'));
const saveDB = require('../cvstomongo');
var constants = require('../constants');
//

const UPLOAD_FILES_DIR = constants.UPLOAD_FILES_DIR;
const IMAGES_FILES_DIR = constants.IMAGES_FILES_DIR;

/////

// Routes
router.get('/', (req, res) => {

    // const data = {
    // title: 'libro2',
    // body: 'sobre fantasmas'

    // };

    // res.json(data);
    console.log('/');

    stock.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });


});


router.post('/save', (req, res) => {

    const data = req.body;
    console.log(data);

    // const newStock = new stock(data);

    stock.updateOne({'my_id':data.my_id}, {$set: data}, {upsert: true}, (error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        //BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

// to update
/////////////////

router.post('/update', (req, res) => {

    const data = req.body;
    console.log('/update');
    console.log(data);

    // const newStock = new stock(data);

    // newStock.save((error) => {
    //     if (error) {
    //         res.status(500).json({ msg: 'Sorry, internal server errors' });
    //         return;
    //     }
    //     //BlogPost
    //     return res.json({
    //         msg: 'Your data has been saved!!!!!!'
    //     });
    // });

    packageData = { category: data.category, desactualizar: data.desactualizar, name: data.name, photo_id: data.photo_id};
    stock.findOneAndUpdate({ 'my_id': data.my_id },
        {$set: packageData,
        $inc: { 'amount': data.amount }, 
        upsert: true},
        function (err, response) {
            if (err) {
                res.status(500).json({ msg: 'Sorry, internal server errors' });
                return;
            }
            //BlogPost
            return res.json({
                msg: 'Your data has been updated!!!!!!'
            });
        });


});


// to upload with formidable
/////////////////

// function checkCreateUploadsFolder(uploadsFolder) {

//     console.log(uploadsFolder);

//     if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir, { recursive: true });
//     }

// }

// function checkCreateUploadsFolder(uploadsFolder) {
//     try {
//         fs.statAsync(uploadsFolder)
//     } catch (e) {
//         if (e && e.code == 'ENOENT') {
//             console.log('The uploads folder doesn\'t exist, creating a new one...')
//             try {
//                 // fs.mkdirSync(uploadsFolder)
//                 fs.promises.mkdir(ploadsFolder, { recursive: true });

//             } catch (err) {

//                 console.log('Error creating the uploads folder 1')
//                 return false

//             }
//         } else {
//             console.log('Error creating the uploads folder 2')
//             return false
//         }
//     }
//     return true
// }

// Returns true or false depending on whether the file is an accepted type
function checkAcceptedExtensions(file) {
    try {
        const type = file.type.split('/').pop()
    } catch (err) {
        console.log('Problema en split')
        console.log(err)
        return false
    }
    const accepted = ['jpeg', 'jpg', 'png', 'gif', 'pdf', 'csv', 'zip']

    if (accepted.indexOf(type) == -1) {
        return false
    }
    return true
}

router.post('/uploadF', async (req, res) => {

    console.log('/uploadF')

    let form = new Formidable.IncomingForm()
    const uploadsFolder = path.join(__dirname, 'dist', 'uploads')
    form.multiples = true
    form.uploadDir = uploadsFolder
    // form.maxFileSize = 50 * 1024 * 1024 // 50 MB
    const folderCreationResult = checkCreateUploadsFolder(uploadsFolder);

    if (!folderCreationResult) {
        return res.json({ ok: false, msg: "The uploads folder couldn't be created" })
    }
    form.parse(req, async (err, fields, files) => {
        let myUploadedFiles = []
        if (err) {
            console.log('Error parsing the incoming form')
            return res.json({ ok: false, msg: 'Error passing the incoming form' })
        }
        // If we are sending only one file:
        if (!files.files.length) {
            const file = files.files
            if (!checkAcceptedExtensions(file)) {
                console.log('The received file is not a valid type')
                return res.json({ ok: false, msg: 'The sent file is not a valid type' })
            }
            const fileName = encodeURIComponent(file.name.replace(/&. *;+/g, '-'))
            myUploadedFiles.push(fileName)
            try {
                await fs.renameAsync(file.path, join(uploadsFolder, fileName))
            } catch (e) {
                console.log('Error uploading the file')
                try { await fs.unlinkAsync(file.path) } catch (e) { }
                return res.json({ ok: false, msg: 'Error uploading the file' })
            }
        } else {
            for (let i = 0; i < files.files.length; i++) {
                const file = files.files[i]
                if (!checkAcceptedExtensions(file)) {
                    console.log('The received file is not a valid type')
                    return res.json({ ok: false, msg: 'The sent file is not a valid type' })
                }
                const fileName = encodeURIComponent(file.name.replace(/&. *;+/g, '-'))
                myUploadedFiles.push(fileName)
                try {
                    await fs.renameAsync(file.path, join(uploadsFolder, fileName))
                } catch (e) {
                    console.log('Error uploading the file')
                    try { await fs.unlinkAsync(file.path) } catch (e) { }
                    return res.json({ ok: false, msg: 'Error uploading the file' })
                }
            }
        }
        res.json({ ok: true, msg: 'Files uploaded succesfully!', files: myUploadedFiles })
    })
})

// to upload with multer
/////////////////

// const UPLOAD_FILES_DIR = path.join(__dirname, 'dist', 'uploads');
// const UPLOAD_FILES_DIR = path.join(__dirname, '..') + "/client/public/uploads";

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, UPLOAD_FILES_DIR);
    }
    // ,
    // // in case you want to change the names of your files)
    //   filename(req, file = {}, cb) {
    //     file.mimetype = "audio/webm";
    //     // console.log(req)
    //     const {originalname} = file;
    //     const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    //     cb(null, `${file.fieldname}${Date.now()}${fileExtension}`);
    //   }

    ,
    filename(req, file = {}, cb) {
        const { originalname } = file;
        //   const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
        //   cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
        cb(null, originalname);

    }

});

const upload = multer({ storage });

// post route that will be hit by your client (the name of the array has to match)
router.post('/uploadM', upload.array('files', 12), function (req, res, next) {

    // checkCreateUploadsFolder(UPLOAD_FILES_DIR);
    console.log(req.body);
    console.log(UPLOAD_FILES_DIR);
    // console.log(req.files);
    // res.redirect('/to');


    req.files.forEach(function (coll, err) {

        console.log(coll.originalname);

        if (coll.originalname.includes("csv")) {
            console.log("es el csv");
            saveDB(coll.originalname);
        }

        if (coll.originalname.includes("zip")) {
            console.log("es el zip");

            // var zip_path = path.resolve(__dirname, '..') + "/uploads/" + coll.name;
            var zip_path = path.join(UPLOAD_FILES_DIR, coll.originalname);
            var unzip_path = path.join(IMAGES_FILES_DIR);

            console.log(zip_path);
            console.log(unzip_path);

            fs.access(zip_path, fs.F_OK, (err) => {

                if (err) {
                    console.error(err)
                    return;
                }

                extract(zip_path, { dir: unzip_path }, (err) => {
                    if (err) console.error('extraction failed.');
                    res.render('upload', { category: 'Stock' });
                });

            })

        }

    });

});

router.post('/to', (req, res) => {

    console.log(req.files);
    res.send('Hello, World!');

});



// to remove
/////////////////
router.get('/remove', (req, res) => {

    console.log('/remove');

    // const data = req.body;
    let { id } = req.query;
    console.log('my_id: ', id);


    stock.deleteOne({ 'my_id': id }, function (err) {
        // if (err) console.log(err);
        if (err) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        //BlogPost
        return res.json({
            msg: 'Your data has been removed!!!!!!'
        });
    });

});


router.get('/getone', (req, res) => {

    console.log('/getone');

    // const data = req.body;
    let { id } = req.query;
    console.log('my_id: ', id);

    // const newStock = new stock(data);
    // res.json(data); 

    // stock.findOne({'my_id':id}, function (err, data) {
    //     if (err) return handleError(err);
    //     // Prints "Space Ghost is a talk show host".
    //     console.log(data);
    //     res.json(data);
    //   });

    stock.findOne({ 'my_id': id })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });

});


router.get('/getoneDB', (req, res) => {


    console.log('/getoneDB');

    let { querydb } = req.query;
    console.log('my_id: ', querydb);


    // const anyDB = mongoose2.model(db, stockSchema);
    // anyDB.find({})
    //     .then((data) => {
    //         console.log('Data: ', data);
    //         res.json(data);
    //     })
    //     .catch((error) => {
    //         console.log('error: ', daerrorta);
    //     });


    mongo.connect(url, function (err, client) {

        if (err) throw err;

        var db = client.db('stockUpdate2');
        var mysort = { 'my_id': 1 };

        db.collection(querydb).find().sort(mysort).toArray(function (err, data) {

            if (err) throw err;

            console.log('Data: ', data);
            res.json(data);

            client.close();

        });

    });



});


router.get('/getoneCategory', (req, res) => {


    console.log('/getoneCategory');

    let { queryCategory } = req.query;
    console.log('my_category: ', queryCategory);

    // res.json({ data: "categoria recuperada" });

    stock.find({ 'category': queryCategory })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });

    // const anyDB = mongoose2.model(db, stockSchema);
    // anyDB.find({})
    //     .then((data) => {
    //         console.log('Data: ', data);
    //         res.json(data);
    //     })
    //     .catch((error) => {
    //         console.log('error: ', daerrorta);
    //     });


    // mongo.connect(url, function (err, client) {

    //     if (err) throw err;

    //     var db = client.db('stockUpdate2');
    //     var mysort = { 'my_id': 1 };

    //     db.collection(querydb).find().sort(mysort).toArray(function (err, data) {

    //         if (err) throw err;

    //         console.log('Data: ', data);
    //         res.json(data);

    //         client.close();

    //     });

    // });



});


router.get('/dbsList', (req, res) => {

    console.log('/dbsList');

    mongoose2.connection.db.listCollections().toArray(function (err, names) {

        console.log(names); // [{ name: 'dbname.myCollection' }]

        // if (names.name.lengt != 0) {
        //     const index = resultArray.indexOf('stock');
        //     resultArray.splice(index, 1);
        //     resultArray.sort();
        //     resultArray.unshift('stock');

        //   }

        res.json(names);
    });


});

/////////////////

router.get('/name', (req, res) => {
    const data = {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;