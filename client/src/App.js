// // import React from 'react';
// import React, { Component } from 'react';
// // import axios from 'axios';


// // import Header from './components/Header';
// // import Footer from './components/Footer';
// import Table from './components/Table';
// import Add from './components/Add';

// import Layout from "./components/layouts/layouts";


// class App extends Component {
//   render() {
//     return (


//       <div>
//         <Layout>

//           <Table />
//           <Add />

//         </Layout>

//       </div>

//       // <Layout>

//       //   <Table />
//       //   <Add />

//       // </Layout>





//     );

//   }
// }

// export default App;

import './App.css';
import React from 'react';
// import { NavLink, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/nav';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Table from './components/Table';
import Add from './components/Add';
import Update from './components/Update';
import Upload from './components/Upload';
import Category from './components/Category';
import Prueba from './components/Prueba';
import Profile from './components/Profile';

import Layout from "./components/layouts/layouts";
import PrivateRoute from './components/PrivateRoute';
import Carrito from "./components/Carrito"; 

export default class App extends React.Component {
  render() {

    return (

      // <div>
      //   <Layout>

      //     {/* <Table />
      //     <Add /> */}
      //     <Prueba />

      //   </Layout>

      // </div>


      <div class="justify-content-center">
        <Router>
          <Layout>

            {/* <Router> */}
            <div>
              <Prueba />
              <Routes>
                {/* <Route exact path="/table" element={<Table />} /> */}
                <Route exact path='/table/:db' element={<Table />} />

                <Route exact path="/add" element={<Add />} />
                {/* <PrivateRoute path="/add" component={<Add/>} /> */}
                {/* <Route exact path='/updateone' element={<Add/>} /> */}
                <Route exact path='/updateone/:id' element={<Update />} />
                <Route exact path='/upload' element={<Upload />} />
                <Route exact path='/profile' element={<Profile />} />

                <Route exact path='/category/:category' element={<Category />} />
                <Route exact path='/carrito' element={<Carrito />} />

                {/* <Route exact path='/remove' element={<Update/>} /> */}
                {/* <Route component={Page404} /> */}
              </Routes>
            </div>
            {/* </Router> */}

          </Layout>
        </Router>
      </div>


      // <div class="justify-content-center">
      //   <Layout>

      //       <Router>
      //         <div>
      //           <Nav />
      //           <Routes>
      //             {/* <Route exact path="/table" element={<Table />} /> */}
      //             <Route exact path='/table/:db' element={<Table/>} />

      //             <Route exact path="/add" element={<Add />} />
      //             {/* <Route exact path='/updateone' element={<Add/>} /> */}
      //             <Route exact path='/updateone/:id' element={<Update/>} />
      //             <Route exact path='/upload' element={<Upload/>} />

      //             <Route exact path='/category/:name' element={<Category/>} />

      //             {/* <Route exact path='/remove' element={<Update/>} /> */}
      //             {/* <Route component={Page404} /> */}
      //           </Routes>
      //         </div>
      //       </Router>

      //   </Layout>
      // </div>
    );
  }
}

// export default App;