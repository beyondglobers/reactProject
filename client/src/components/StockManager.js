// https://auth0.com/docs/quickstart/spa/react/02-calling-an-api

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav, NavDropdown } from 'react-bootstrap';


const StockManager = () => {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);



  if (isAuthenticated && (user.email == 'acpmnew@gmail.com')) {


    return (

      <>

        <NavDropdown title="Stock" id="navbarScrollingDropdown2">
          <NavDropdown.Item href="/table/stocks">Stock</NavDropdown.Item>
          <NavDropdown.Item href="/add">Agregar</NavDropdown.Item>
          <NavDropdown.Item href="/upload">Cargar</NavDropdown.Item>
        </NavDropdown>

        {/* <Nav.Link href="/table/stocks">Stock</Nav.Link>
        <Nav.Link href="/add">Agregar</Nav.Link>
        <Nav.Link href="/upload">Cargar</Nav.Link> */}

      </>);

  }
  else if (isAuthenticated && (user.email != 'acpmnew@gmail.com')) {
    console.log(user.email);
    return (

      <>

        <Nav.Link href="/carrito">Carrito</Nav.Link>

      </>);

  }

  else {

    return (

      <>
        <Nav.Link href="#">Algo</Nav.Link>
      </>);

  }



  // return (

  //   isAuthenticated && (

  //     <div>

  //       <Nav.Link href="/table/stocks">Stock</Nav.Link>
  //       <Nav.Link href="/add">Agregar</Nav.Link>
  //       <Nav.Link href="/upload">Cargar</Nav.Link>

  //     </div>
  //   )


  // );
};

export {
  StockManager
}