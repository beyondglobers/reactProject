// import React, { Component } from 'react';

// class Footer extends Component {

//   render() {
//     return (
//       <div>
//         This is Footer component.
//       </div>        
//     );
//   }
// }

// export default Footer;


////////////////////

import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';

import img1 from '../images/fbLogo.png';
import img2 from '../images/igLogo.png';


import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel'


export class Footer extends Component {

  render() {

    return (

      <div class="mt-3 mb-3 totalblack ">
        {/* bg="light" */}
        <Navbar expand="lg" className="">
          <Container fluid>
            {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >

                <button class="btn btn-outline-light" type="button">Inicio</button>
                <button class="btn btn-outline-light" type="button">Opiniones</button>
                {/* <Nav.Link href="#"  className=" btn btn-outline-light">Inicio</Nav.Link>
                <Nav.Link href="#"  className=" btn btn-outline-light">Opiniones</Nav.Link> */}
                {/* text-light */}
              </Nav>

            </Navbar.Collapse>

          </Container>
        </Navbar>

        <div class="text-center text-light totalblack">

          <div>

            <p>
              MAYOREO.CO - CARRERA 20#10-41 BODEGA 205 - Bogotá, D.C. (Bogotá) - Colombia <br/>
              Contáctanos: (+57) 3044201465
            </p>

            

          </div>


          <div class="container">
            <div class="row">
              <div class="col">
                <img style={{ 'height': "40px" }} src={img1} alt="" className="d-inline-flex" />
                <img style={{ 'height': "40px" }} src={img2} alt="" className="d-inline-flex" />
              </div>
            </div>
          </div>

          <div class="container pt-3 pb-3">
            <p>
              <h6><small>VIVE TRAVEL TECH SAS - Copyright © 2021 - Prohibida la reproducción total o parcial, así como su traducción a cualquier idioma sin autorización escrita del titular.</small></h6>
            </p>
          </div>

        </div>


      </div>

    )

  }

}

export default Footer;

