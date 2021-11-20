///////////////////////////////////////////////////////////////////////////////////////////////
/////////////// multer y express

multer y express
https://stackoverflow.com/questions/58381990/react-axios-multiple-files-upload


Client side:


///////////////////

<div>
    <h1>File upload </h1>
    <input type="file" name="file1" multiple onChange={this.uploadFile} />
</div>

///////////////////


uploadFile = async e => {

    // e.preventDefault();
    console.log("uploadFile");

    const files = e.target.files
    // console.log('files', files)

    const form = new FormData()
    for (let i = 0; i < files.length; i++) {
        // console.log(i, ' file', files[i])
        form.append('files', files[i])
    }

    console.log('form: ', form.getAll('files'))

    // axios({
    //     url: '/api/multer',
    //     method: 'POST',
    //     data: form,
    //     headers: {
    //         "Content-Type": "multipart/form-data"
    //     },
    // })
    //     .then(() => {
    //         console.log('Data has been sent to the server');
    //     })
    //     .catch((err) => {
    //         alert('Error uploading the files');
    //         console.log('Error uploading the files', err);
    //     });

    try {
        let request = await fetch('/api/multer', {
            method: 'post',
            body: form
        })
        const response = await request.json()
        console.log('Response', response)
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }

}
 

Server side:


const UPLOAD_FILES_DIR = path.join(__dirname, 'dist', 'uploads');
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, UPLOAD_FILES_DIR);
    }
});
const upload = multer({ storage });

router.post("/multer", upload.array('files', 5), function (req, res) {
    console.log(req.files, 'files');
    //logs 3 files that have been sent from the client
});

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////// formidable y express

https://www.youtube.com/watch?v=jtCfvuMRsxE
https://gist.github.com/merlox/203c477a6e58055c68f83d0ebd06b323

Client side:

<div>
    <h1>File upload</h1>
    <input type="file" multiple onChange={e => uploadFile(e)} />
</div>

uploadFile = (event) => {

    event.preventDefault();
    console.log("uploadFile");

    const files = event.target.files;
    console.log('files', files);

    const form = new FormData()
    for (let i = 0; i < files.length; i++) {
        console.log(i, files[i]);
        form.append('files', files[i], files[i].name);
    }

    console.log('form: ', form.getAll('files'));

    // axios({
    //     url: '/api/upload',
    //     method: 'POST',
    //     data: form,
    //     headers: { "Content-Type": "multipart/form-data" }
    // })
    //     .then(() => {
    //         console.log('Data has been sent to the server');
    //     })
    //     .catch((err) => {
    //         alert('Error uploading the files');
    //         console.log('Error uploading the files', err);
    //     });


};


Server side:


// const Formidable = require('formidable')
// const bluebird = require('bluebird')
// const fs = bluebird.promisifyAll(require('fs'))


// Returns true if successful or false otherwise
function checkCreateUploadsFolder(uploadsFolder) {
    try {
        fs.statAsync(uploadsFolder)
    } catch (e) {
        if (e && e.code == 'ENOENT') {
            console.log('The uploads folder doesn\'t exist, creating a new one...')
            try {
                // fs.mkdirSync(uploadsFolder)
                fs.promises.mkdir(ploadsFolder, { recursive: true });
            } catch (err) {
                console.log('Error creating the uploads folder 1')
                return false
            }
        } else {
            console.log('Error creating the uploads folder 2')
            return false
        }
    }
    return true
}

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


app.post('/upload', async (req, res) => {

    let form = new Formidable.IncomingForm()
    const uploadsFolder = join(__dirname, 'dist', 'uploads')
    form.multiples = true
    form.uploadDir = uploadsFolder
    form.maxFileSize = 50 * 1024 * 1024 // 50 MB
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