// import React from 'react';
// import axios from 'axios';

import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


// import './App.css';

class Upload extends Component {

  // constructor(props) {
  //   super(props);

  // }

  state = {
    profileImg: '',
    posts: [],
    file: null
  };

  componentDidMount = () => {
    // this.getBlogPost();
  };


  /*  //multer rute */
  uploadFileM = async e => {

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
    //   url: '/api/uploadM',
    //   method: 'POST',
    //   data: form,
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //     // "enctype": "multipart/form-data"
    //   }
    // })
    //   .then(() => {
    //     console.log('Data has been sent to the server');
    //   })
    //   .catch((err) => {
    //     alert('Error uploading the files');
    //     console.log('Error uploading the files', err);
    //   });


    try {
      let request = fetch('/api/uploadM', {
        method: 'post',
        body: form
        // ,
        // headers: {
        //   "Content-Type": "multipart/form-data"
        //   // "enctype": "multipart/form-data"
        // }
      })
      // const response = request.json();
      console.log('Response', request)
    } catch (err) {
      alert('Error uploading the files')
      console.log('Error uploading the files', err)
    }

  }


  /*  //formidable rute */
  uploadFileF = (event) => {

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

    axios({
      url: '/api/uploadF',
      method: 'POST',
      data: form,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(() => {
        console.log('Data has been sent to the server');
      })
      .catch((err) => {
        alert('Error uploading the files');
        console.log('Error uploading the files', err);
      });


  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return (

      ///////////////////
      <div>

        {/* <div>
          <h1>File upload For...able </h1>
          <input type="file" name="file1" multiple onChange={this.uploadFileF} />
        </div> */}

        <div>
          {/* <h1>File upload Multer </h1> */}
          <h1>Upload File  </h1>
          <input type="file" name="file1" multiple onChange={this.uploadFileM} />
        </div>

      </div>

      ///////////////////

      /////////////////////
      // multer
      // <div>
      //   <form onSubmit={this.onFormSubmit}>
      //     <h1>File Upload</h1>
      //     <input type="file" onChange={this.onChange} />
      //     <button type="submit">Upload</button>
      //   </form>
      // </div>


      // https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

      // <div className="container">
      //   <div className="row">
      //     <form onSubmit={this.onSubmit}>
      //       <div className="form-group">
      //         <input type="file" onChange={this.onFileChange} />
      //       </div>
      //       <div className="form-group">
      //         <button className="btn btn-primary" type="submit">Upload</button>
      //       </div>
      //     </form>
      //   </div>
      // </div>

    );
  }
}


export default Upload;