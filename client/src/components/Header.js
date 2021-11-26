// import React, { Component } from 'react';
// import img1 from '../images/img1.png';
// import img2 from '../images/img2.png';

// class Header extends Component {
//   render() {
//     return (
//       // <div>
//       //   This is header component.
//       // </div>

//       <div id="carouselExampleSlidesOnly" class="carousel slide " data-ride="carousel">
//         <div class="carousel-inner">

//           <div class="carousel-item active" data-interval="5000">
//             <img src={img1} class="d-block w-100" alt="..."/>
//           </div>
//           <div class="carousel-item active" data-interval="5000">
//             <img src={img2} class="d-block w-100" alt="..."/>
//           </div>

//         </div>
//       </div>


//     );
//   }
// }

// export default Header;


import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/LOGO.png';


import React, { Component } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Carousel, Button } from 'react-bootstrap';


import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton, ProfileButton } from './Login';


const Header = () => {
  // export class Header extends Component {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  // render() {

  return (

    <div>

      {/* <div class='container-fluid' >

          <div className="row title" style={{ marginBottom: "20px" }} >

            <div class="col-sm-12 btn btn-warning">

              How To Use Bootstrap Carousel In ReactJS

            </div>

          </div>

        </div> */}


      {/* <div class="row"> */}

      <div class="totalblack ">
      {/* navbar-light bg-light */}
        <div class="container navbar-expand-lg ">


            {/* <a class="navbar-brand" href="#">
              <img src={img3} width="50" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}

            <div class="row pb-5 pt-5 align-items-center justify-content-center totalblack" id="navbarSupportedContent">
              
              <div class="col text-start">
                <a class="navbar-brand" href="#">
                  <img src={img3} width="100" alt="" />
                </a>
              </div>

              <div class="col text-center">
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-light" type="button">Buscar</button>
                  </div>
                  <input type="text" class="form-control" placeholder="¿qué estás buscando?" aria-label="" aria-describedby="basic-addon1"></input>
                </div>
              </div>
              
              <div class="col text-end">
                <div class="input-group-prepend">
                  {/* <button class="btn btn-outline-secondary" type="button">Login</button> */}
                  {isAuthenticated ? (
                    <> 
                      <ProfileButton/>                
                      <LogoutButton />
                      
                    </>
                  ) : (
                    <LoginButton />
                  )}
                </div>
              </div>

            </div>




        </div>


        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <a class="navbar-brand col-xs-4" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>


            <div class="input-group mb-3 col-xs-4">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button">Button</button>
              </div>
              <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"></input>
            </div>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto col-xs-4">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>


          </nav> */}

      </div >

      {/* </div> */}

      <div className="container-fluid w-100 navbar-expand-lg p-0" >

        <Carousel interval={5000} keyboard={false} pauseOnHover={true}>

          <Carousel.Item style={{ 'height': "300px" }} >

            <img style={{ 'height': "300px" }}

              className="d-block w-100"

              src={img1} alt="" />

            <Carousel.Caption>

              {/* <h3>First Demo </h3> */}

            </Carousel.Caption>

          </Carousel.Item  >

          <Carousel.Item style={{ 'height': "300px" }}>

            <img style={{ 'height': "300px" }}

              className="d-block w-100"

              src={img2} alt="" />

            <Carousel.Caption>

              {/* <h3>Second Demo</h3> */}

            </Carousel.Caption>

          </Carousel.Item>

          {/* <Carousel.Item style={{ 'height': "300px" }}>

              <img style={{ 'height': "300px" }}

                className="d-block w-100"

                src={'assets/img/img3.jpg'} />

              <Carousel.Caption>

                <h3>Third Demo</h3>

              </Carousel.Caption>

            </Carousel.Item> */}

        </Carousel>

      </div >

    </div >

  )

  // }

}

export default Header;

