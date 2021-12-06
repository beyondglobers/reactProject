// import React from 'react';
// import axios from 'axios';

import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


// import { useLocation, useParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// const { state } = this.props.location;

// const { product } = useLocation();

// import './App.css';

class Update extends Component {


  state = {
    my_id: '',
    amount: '',
    category: '',
    desactualizar: '',
    name: '',
    photo_id: '',
    clear: ''

  };

  componentDidMount = () => {

    // this.getBlogPost();

    // this.state.my_id = this.props.match.params.id;

    // const { id } = useParams();
    const { id } = this.props.params;

    // this.state.my_id = id;

    // const {state} = useLocation();
    // const { id } = state;
    // this.state.my_id = id;

    // const id = this.props.match.params.id;

    this.setid(id);
    this.getOne();
  };

  setid = (id) => {

    this.state.my_id = id;

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


  getOne = () => {
    axios.get('/api/getone', {
      params: {
        // product: this.state.my_id,
        id: this.state.my_id

      }
    })
      .then((response) => {
        const data = response.data;
        this.setUserInputs(data);
        // this.setState({ posts: data }); // se puede prescindir de esta linea
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }


  // getOne = () => {
  //   axios.get('/api/getone');
  // }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {

    event.preventDefault();

    const payload = {

      // title: this.state.title,
      // body: this.state.body

      my_id: this.state.my_id,
      amount: this.state.clear,
      category: this.state.category,
      desactualizar: this.state.desactualizar,
      name: this.state.name,
      photo_id: this.state.photo_id

    };


    axios({
      url: '/api/update',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Data has been sent to the server');
        // this.resetUserInputs();
        this.getOne();

        // this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });

    this.setState({ clear: '' });

  };

  setUserInputs = (inputs) => {

    this.setState({
      // title: '',
      // body: '',

      my_id: inputs.my_id,
      amount: inputs.amount,
      category: inputs.category,
      desactualizar: inputs.desactualizar,
      name: inputs.name,
      photo_id: inputs.photo_id

    });
  };

  resetUserInputs = () => {
    this.setState({
      // title: '',
      // body: '',

      my_id: '',
      amount: '',
      category: '',
      desactualizar: '',
      name: '',
      photo_id: ''

    });
  };

  // displayBlogPost = (posts) => {

  //   if (!posts.length) return null;


  //   return posts.map((post, index) => (
  //     <div key={index} className="blog-post__display">
  //       <h3>{post.title}</h3>
  //       <p>{post.body}</p>
  //     </div>
  //   ));
  // };

  render() {

    console.log('State: ', this.state);

    //JSX
    return (
      <div class="row justify-content-center">

        <div class="col-auto">
          <h2>Actualizar</h2>
          <form onSubmit={this.submit}>

            {/* // my_id */}
            <div className="form-input">

              my_id:
              <div>
                <input
                  type="text"
                  name="my_id"
                  placeholder="ID"
                  value={this.state.my_id}
                  onChange={this.handleChange}
                  disabled
                />
              </div>
            </div>

            {/* // amount */}
            <div className="form-input">

              {(this.state.amount)} unds, agregar:
              <div>
                <input
                  type="text"
                  name="clear"
                  placeholder="Cantidad"
                  value={this.state.clear}
                  // value = {0}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* // category */}
            <div className="form-input">

              category:
              <div>
                <input
                  type="text"
                  name="category"
                  placeholder="Categoría"
                  value={this.state.category}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* // desactualizar */}
            <div className="form-input">

              desactualizar:
              <div>
                <input
                  type="text"
                  name="desactualizar"
                  placeholder="Desactualizar"
                  value={this.state.desactualizar}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* // name */}
            <div className="form-input">

              name:
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            {/* // photo_id */}
            <div className="form-input">

              photo_id:
              <div>
                <input
                  type="text"
                  name="photo_id"
                  placeholder="Photo_id"
                  value={this.state.photo_id}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
            <br></br>
              <button>Submit</button>
            </div>

          </form>

        </div>
      </div>
    );
  }
}


// export default Update;

export default (props) => (
  <Update
    {...props}
    params={useParams()}
  />
);


// class Update extends Component {

//   render() {
//     return(
//       <div>
//         <h2>Welcome to update</h2>
//         {/* <h2>{this.props.match.params.id}</h2> */}
//       </div>
//     )
//   }
// }

// export default Update;