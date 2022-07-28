import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <div className="nav navbar">
       <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/sup">Supplements</Nav.Link>
        <Nav.Link href="/equip">Equipment</Nav.Link>
        <Nav.Link href="/gear">Gear</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
   
  );
}

export default Navigation;