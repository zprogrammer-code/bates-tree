import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import"/home/zprogrammercode/BatesTree/bates-tree/src/css/style.css";






const BtNav = () => {


    return(
        <>
        <Navbar className="navbar-background">
            <Container className="brand-container">
                <Navbar.Brand href="#home">
                    <img
                     alt=""
                     src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1705162335/imageedit_1_4986758091_m8maes.png"
                     width="175"
                     height="80"
                     className="d-inline-block align-top"
                     />{' '}
                </Navbar.Brand>
            </Container>
             <Container className="link-container">
                 <Nav className="me-auto">
                    <Nav.Link className="nav-links" href="#home">(719)-440-7363</Nav.Link>
                     
                 </Nav>
             </Container>
        </Navbar>
        </>
    )
}

export default BtNav;