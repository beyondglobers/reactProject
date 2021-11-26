// import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

// import { NavLink, Link, Routes, Route, BrowserRouter as Router , useParams } from 'react-router-dom';
import { NavLink, useParams } from 'react-router-dom';
// import Update from './Update';
// import Add from './Add';

// import RnIncrementDecrementBtn  from  'react-native-increment-decrement-button';
// import NumericInput from 'react-native-numeric-input';

class Table extends Component {

  state = {
    db: 'stocks',
    // title: '',
    // body: '',
    posts: [],
    dbs: [],
    value : 0

  };

  componentDidMount = () => {
    this.getBlogPost();
    this.getDbsList();


    const { db } = this.props.params;
    this.setdb(db);

    // this.getOneDB(this.state.db);

  };

  setdb = (db) => {

    // this.state.db = db;

    this.setState({
      db: db
    })



  };

  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  getOneDB = (event) => {

    this.state.db = event.target.value;

    axios.get('/api/getoneDB', {
      params: {
        // product: this.state.my_id,
        querydb: event.target.value
      }
    })
      .then((response) => {
        const data = response.data;
        // console.log(data);
        this.setState({ posts: data }); // se puede prescindir de esta linea
        console.log('Data has been received!!');
      })
      .catch((e) => {
        console.log(e);
        alert('Error retrieving data!!!');
      });
  }


  getDbsList = () => {
    axios.get('/api/dbsList')
      .then((response) => {
        const data = response.data;
        this.setState({ dbs: data });
        console.log('DBs List collection has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }


  removeOne = (id) => {
    axios.get('/api/remove', {
      params: {
        // product: this.state.my_id,
        'id': id
      }
    })
      .then((response) => {
        // const data = response.data;
        // this.setUserInputs(data);
        // this.setState({ posts: data }); // se puede prescindir de esta linea
        this.getBlogPost();
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

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


  // handleChange = ({ target }) => {
  // const { name, value } = target;
  // this.setState({ [name]: value });
  // };


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

  displayDbsList = (dbsList) => {

    if (!dbsList.length) return null;

    return dbsList.map((post, index) => (
      // <a href="#">{post.name}</a>
      // <a class="dropdown-item" href="#" key={index}>{post.name}</a>
      // <li><a class="dropdown-item" href="#">{post.name}</a></li>
      <option value={post.name} >{post.name}</option>

    ));

  };


  displayBlogPost = (posts) => {

    if (!posts.length) {

      return <td colspan="9">No Data Found</td>;
      // return null;
    }
    else {

      return posts.map((post, index) => (

        <tr key={index}>
          <td>
            {index}
          </td>
          <td>
            {post.my_id}
          </td>
          <td>
            {post.name}
          </td>
          <td>
          {/* <RnIncrementDecrementBtn minVal={0}  max={10000} val={post.amount} />   */}
          {/* <NumericInput value={this.state.value} onChange={value => this.setState({value})} /> */}
          </td>
          <td>
            {post.ventas}
          </td>
          <td>
            {post.category}
          </td>
          <td>
            {post.desactualizar}
          </td>
          <td>

            {(this.state.db == 'stocks' ?
              (
                <NavLink className="navbar-item flex" activeClassName="is-active"
                  to={{
                    pathname: `/updateone/${post.my_id}`,
                    state: {
                      id: post.my_id
                      // whatever you need to send with the route transition
                    },
                  }}>
                  Editar
                </NavLink>
              )
              : (<></>)
            )}


            {/* <NavLink className="navbar-item flex" activeClassName="is-active"
              to={{
                pathname: `/updateone/${post.my_id}`,
                state: {
                  id: post.my_id
                  // whatever you need to send with the route transition
                },
              }}>
              Editar
            </NavLink> */}



            {/* <NavLink className="navbar-item flex" activeClassName="is-active" to="/updateone" >
            Editar
          </NavLink> */}

            {/* <Link to="/updateone">edit</Link> */}



          </td>

          <td>
            {/* <NavLink className="navbar-item flex" activeClassName="is-active" to="/remove">
            Remove
          </NavLink> */}

            {/* <Link onClick={this.removeOne({post.my_id})}>Remove</Link> */}
            {/* <Link onClick={() => this.removeOne(post.my_id)}>Remove</Link> */}
            {/* <Link >Remove</Link> */}

            {(this.state.db == 'stocks' ?
              (
                <a href='#' onClick={() => this.removeOne(post.my_id)}> Remove </a>
              )
              : (<></>)
            )}




          </td>

        </tr >


      ));
    }
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return (


      <div class="container justify-content-center">

        {/* bg-light */}
        <div class="d-flex justify-content-center ">
          <h2>Stock</h2>
        </div>

        <div class="container justify-content-center">

          <select name="dog-names" id="dog-names" class="btn btn-secondary dropdown-toggle" type="button"
            aria-expanded="false" onChange={this.getOneDB}>
            {this.displayDbsList(this.state.dbs)}
          </select>

          <div class="table-responsive">
            <table border="1" class="tablecenterheadCSS table table-hover table-bordered">
              <tr>
                <td >S.No</td>
                <td >id</td>
                <td >Name</td>
                <td >Amount</td>
                <td >Ventas</td>
                <td >Categoria</td>
                <td >Desactualizar</td>
                <td ></td>
                <td ></td>
                {/* <th>Edit</th>
                      <th>Delete</th> */}
              </tr>
              {this.displayBlogPost(this.state.posts)}
            </table>
          </div>
        </div >


        {/* <Routes>

          <Route exact path='/updateone' element={<Add/>} />

        </Routes> */}


      </div>


      // <div>
      //   <Router>

      //   <div>



      //   </div>

      //   </Router>
      // </div>


    );
  }
}


// export default Table;

export default (props) => (
  <Table
    {...props}
    params={useParams()}
  />
);