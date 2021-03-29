import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  return (
    <header>
      <Container>
        <Navbar  className="navbar" >
          <Navbar.Brand className="nav" href="#">
            MERN App 
          </Navbar.Brand>
        </Navbar>
      </Container>
    </header>
  );
};

export default NavBar;
