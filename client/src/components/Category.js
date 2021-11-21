// import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import path from 'path';

// import { NavLink, Link, Routes, Route, BrowserRouter as Router , useParams } from 'react-router-dom';
import { NavLink, useParams } from 'react-router-dom';
// import Update from './Update';
// import Add from './Add';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
import { Row, Col } from 'react-bootstrap';


// var constants = require('../../../constants');

// const UPLOAD_FILES_DIR = constants.UPLOAD_FILES_DIR;
// const IMAGES_FILES_DIR = constants.IMAGES_FILES_DIR;

// const imgDir = path.join(IMAGES_FILES_DIR ,"hogar4.jpg");

import img1 from "../images/hogar4.jpg";

class Category extends Component {

  // const [imgErr, setImgErr] = useState([]);

  state = {
    category: '',
    posts: [],
    products: [],
    imageLoadError: true
  };

  componentDidMount = () => {

    // this.getBlogPost();
    // this.getDbsList();


    const { category } = this.props.params;
    this.setName(category);

    this.getoneCategory(category);

    // this.getOneDB(this.state.db);

  };

  setName = (category) => {

    // this.state.db = db;

    this.setState({
      category: category
    })



  };

  // getBlogPost = () => {
  //   axios.get('/api')
  //     .then((response) => {
  //       const data = response.data;
  //       this.setState({ posts: data });
  //       console.log('Data has been received!!');
  //     })
  //     .catch(() => {
  //       alert('Error retrieving data!!!');
  //     });
  // }

  getoneCategory = (category) => {
    axios.get('/api/getoneCategory', {
      params: {
        // queryCategory: this.state.category
        queryCategory: category
      }
    })
      .then((response) => {
        const data = response.data;
        // console.log(data);
        this.setState({ products: data }); // se puede prescindir de esta linea
        console.log('Products has been received!!');
      })
      .catch((e) => {
        console.log(e);
        alert('Error retrieving products!!!');
      });
  }


  /* // */

  // getDbsList = () => {
  //   axios.get('/api/dbsList')
  //     .then((response) => {
  //       const data = response.data;
  //       this.setState({ dbs: data });
  //       console.log('DBs List collection has been received!!');
  //     })
  //     .catch(() => {
  //       alert('Error retrieving data!!!');
  //     });
  // }

  /* // */

  // removeOne = (id) => {
  //   axios.get('/api/remove', {
  //     params: {
  //       // product: this.state.my_id,
  //       'id': id
  //     }
  //   })
  //     .then((response) => {
  //       // const data = response.data;
  //       // this.setUserInputs(data);
  //       // this.setState({ posts: data }); // se puede prescindir de esta linea
  //       this.getBlogPost();
  //       console.log('Data has been received!!');
  //     })
  //     .catch(() => {
  //       alert('Error retrieving data!!!');
  //     });
  // }

  /* // */

  // removeOne = (id) => {
  //   axios.get('/api/remove', {
  //     params: {
  //       // product: this.state.my_id,
  //       'id': id
  //     }
  //   })
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(data);
  //       console.log('Data has been received in Update component!!');
  //     });
  // }

  /* // */

  // handleChange = ({ target }) => {
  // const { name, value } = target;
  // this.setState({ [name]: value });
  // };

  /* // */

  // submit = (event) => {
  // event.preventDefault();

  // const payload = {
  // title: this.state.title,
  // body: this.state.body
  // };


  // axios({
  // url: '/api/save',
  // method: 'POST',
  // data: payload
  // })
  // .then(() => {
  // console.log('Data has been sent to the server');
  // this.resetUserInputs();
  // this.getBlogPost();
  // })
  // .catch(() => {
  // console.log('Internal server error');
  // });;
  // };

  // resetUserInputs = () => {
  // this.setState({
  // title: '',
  // body: ''
  // });
  // };

  /* // */

  // displayDbsList = (dbsList) => {

  //   if (!dbsList.length) return null;

  //   return dbsList.map((post, index) => (
  //     // <a href="#">{post.name}</a>
  //     // <a class="dropdown-item" href="#" key={index}>{post.name}</a>
  //     // <li><a class="dropdown-item" href="#">{post.name}</a></li>
  //     <option value={post.name} >{post.name}</option>

  //   ));

  // };

  /* // */

  addDefaultSrc(ev) {
    ev.target.src = '../images/none.jpg';
    ev.target.onerror = null;
  }


  tryRequire = (path) => {
    try {
      return require(path);
    } catch (err) {
      // return null;
      return require("../images/none.jpg");
    }
  };

  displayCatProducts = (products) => {

    if (!products.length) {

      // return <td colspan="8">No Data Found</td>;
      return <h1>No products found</h1>;
      // return null;
    }
    else {

      // var photPath = "../../public/images" + {product.photo_id};
      return products.map((product, index) => (

        // <div key={index}>
        //   <p>{product.my_id}</p>
        //   <p>{product.name}</p>
        //   <p>{product.amount}</p>
        // </div>


        <Col>
          <Card style={{ width: '15rem', height: '18rem' }} key={index}>

            {/* <picture>
              <source id="s1" srcset="image1_not_supported_by_browser.webp" type="image/webp">
                <source id="s2" srcset="image2_broken_link.png" type="image/png">
                  <img src="image3_fallback.jpg" alt="" onerror="this.onerror=null;document.getElementById('s1').srcset=document.getElementById('s2').srcset=this.src;"/>
                  </picture> */}



            <img src={`../images/${product.photo_id}`} alt="Imagen Producto" class="cardImage"
            />

            {/* onError={(e) => {
              if (e.target.src !== "../images/none.jpg") { e.target.src = "../images/none.jpg"; }
            }} */}

            {/* https://stackoverflow.com/questions/48259512/how-to-check-if-a-pariticular-fileexists-in-reactjs/48264153 */}

            {/* <img src = {this.tryRequire(`../images/${product.photo_id}`)} alt={product.name} class="cardImage" /> */}

            {/* <img src={`../images/${product.photo_id}`} alt="Imagen Producto" class="cardImage"
                  onError={e => { 
                    if(this.state.imageLoadError) { 
                        this.setState({
                            imageLoadError: false
                        });
                        e.target.src = '../images/none.jpg';
                    }
                }} /> */}

            {/* <img src={`../images/${product.photo_id}`} alt="Imagen Producto" class="cardImage"
                     /> */}


            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <p>Unidades: {product.amount}</p>
              </Card.Text>
              <Button variant="primary">Agregar</Button>
            </Card.Body>
          </Card>
        </Col>


      ));
    }
  };

  render() {


    console.log('State: ', this.state);



    //JSX
    return (
      <div>
        <h1>{this.state.category}</h1>
        <Row xs={1} md={4} className="g-4">

          {this.displayCatProducts(this.state.products)}

        </Row>

      </div>

      // <div class="container justify-content-center">


      //   <div class="d-flex justify-content-center bg-light">
      //     <h2>Stock</h2>
      //   </div>

      //   <div class="container justify-content-center">

      //     <select name="dog-names" id="dog-names" class="btn btn-secondary dropdown-toggle" type="button"
      //       data-bs-toggle="dropdown" aria-expanded="false" onChange={this.getOneDB}>
      //       {this.displayDbsList(this.state.dbs)}
      //     </select>

      //     <div class="table-responsive">
      //         <table border="1" class="tablecenterheadCSS table table-hover table-bordered">
      //         <tr>
      //           <td >S.No</td>
      //           <td >id</td>
      //           <td >Name</td>
      //           <td >Amount</td>
      //           <td >Categoria</td>
      //           <td >Desactualizar</td>
      //           <td >fff</td>
      //           <td >aa</td>
      //           {/* <th>Edit</th>
      //                 <th>Delete</th> */}
      //         </tr>
      //         {this.displayBlogPost(this.state.posts)}
      //       </table>
      //     </div>
      //   </div >


      //   {/* <Routes>

      //     <Route exact path='/updateone' element={<Add/>} />

      //   </Routes> */}


      // </div>


    );
  }
}


// export default Table;

export default (props) => (
  <Category
    {...props}
    params={useParams()}
  />
);