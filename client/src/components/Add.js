// import React from 'react';
// import axios from 'axios';

import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


// import './App.css';

class Add extends Component {

  state = {
    my_id: '',
    amount: '',
    category: '',
    desactualizar: '',
    name: '',
    photo_id: '',
    posts: []
  };

  componentDidMount = () => {
    // this.getBlogPost();
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
      amount: this.state.amount,
      category: this.state.category,
      desactualizar: this.state.desactualizar,
      name: this.state.name,
      photo_id: this.state.photo_id

    };


    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
      .then((response) => {
        console.log(response);
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        // this.getBlogPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
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
          {/* <h2>Agregar</h2> */}

          <div class="d-flex justify-content-center">
            <h2>Agregar</h2>
          </div>

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

            {/* // amount */}
            <div className="form-input">

              amount:
              <div>
                <input
                  type="text"
                  name="amount"
                  placeholder="Cantidad"
                  value={this.state.amount}
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

            <button>Submit</button>
          </form>

        </div>
      </div>
    );
  }
}


export default Add;