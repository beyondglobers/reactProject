// https://auth0.com/docs/quickstart/spa/react/02-calling-an-api

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from 'react-bootstrap';

const Profile = () => {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  if (isAuthenticated) {

    return (

      <>

        <Nav.Link href="/table/stocks">Stock</Nav.Link>
        <Nav.Link href="/add">Agregar</Nav.Link>
        <Nav.Link href="/upload">Cargar</Nav.Link>

      </>);

  }
  else {

    return (

      <>

        <Nav.Link href="/table/stocks"></Nav.Link>
        <Nav.Link href="/add"></Nav.Link>
        <Nav.Link href="/upload"></Nav.Link>

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
  Profile
}