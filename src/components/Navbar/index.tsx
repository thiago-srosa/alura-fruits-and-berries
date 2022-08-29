import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { ContactModal } from "src/components/ContactModal";

export const CustomNavbar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Navbar as="header" fixed="top" bg="light" expand="lg">
        <Container as="nav">
          <Navbar.Brand className="title-font special-color" href="#home">
            Fruits & Berries
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav as="ul" className="me-auto w-100 justify-content-end">
              <li>
                <Nav.Link href="#home">Home</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#link">Recipes</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#link">About Us</Nav.Link>
              </li>
              <li>
                <Nav.Link href="#link" onClick={() => setModalShow(true)}>
                  Contact
                </Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
