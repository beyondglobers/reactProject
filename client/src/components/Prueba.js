import React from 'react';
// import { NavLink } from "react-router-dom";

// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap';

// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

import { useAuth0 } from "@auth0/auth0-react";


// const [userMetadata, setUserMetadata] = useState(null);

// import LoginButton from './Login';
import { StockManager } from './StockManager';

import { LoginButton, LogoutButton } from './Login';

// import PrivateRoute from './PrivateRoute';


const Prueba = () => {

    // export default class Prueba extends React.Component {

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();


    // render() {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                            {/* {
                                <>
                                </>
                            } */}

                            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/category/hogar">Hogar</NavDropdown.Item>
                                <NavDropdown.Item href="/category/belleza">Belleza</NavDropdown.Item>
                                <NavDropdown.Item href="/category/audio">Audio</NavDropdown.Item>
                                <NavDropdown.Item href="/category/linterna">Linterna</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item> */}
                            </NavDropdown>

                            {/* <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}

                            <StockManager />

                        </Nav>

                        {/* <Form className="d-flex">

                            {isAuthenticated ? (
                                <>
                                    <LogoutButton />
                                </>
                            ) : (
                                <LoginButton />
                            )}

                        </Form> */}

                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
    // }
};

// export {
//     Prueba
// }

export default Prueba;