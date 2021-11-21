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


import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'


export class Header extends Component {

  render() {

    return (

      <div>

        {/* <div class='container-fluid' >

          <div className="row title" style={{ marginBottom: "20px" }} >

            <div class="col-sm-12 btn btn-warning">

              How To Use Bootstrap Carousel In ReactJS

            </div>

          </div>

        </div> */}

        <div className='container-fluid' >

        <Carousel interval={5000} keyboard={false} pauseOnHover={true}>  

            <Carousel.Item style={{ 'height': "300px" }} >

              <img style={{ 'height': "300px" }}

                className="d-block w-100"

                src={img1} alt=""/>

              <Carousel.Caption>

                <h3>First Demo </h3>

              </Carousel.Caption>

            </Carousel.Item  >

            <Carousel.Item style={{ 'height': "300px" }}>

              <img style={{ 'height': "300px" }}

                className="d-block w-100"

                src={img2} alt=""/>

              <Carousel.Caption>

                <h3>Second Demo</h3>

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

        </div>

      </div>

    )

  }

}

export default Header

