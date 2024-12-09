import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; 
import Logo from "../img/logo.png"; 
import "./NavCont.css"; 

function NavCont() {
  const [expanded, setExpanded] = useState(false);

  function fbHandleClick() {
    window.open(
      "https://www.facebook.com/mamsltg/?hc_ref=ARS7Zvhy22p9VHz3CguJwLun_Df5Z7YWrsav-j32x_HmLtk5FPQuEYIfGw8tdG7asUE&fref=nf&__tn__=kC-R"
    );
  }


  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className="bg-color" 
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            className="d-inline-block align-top logo-img"
            alt="LT&G Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Branches</Nav.Link>
            <Nav.Link href="#link">Franchising</Nav.Link>
            <Nav.Link href="#link">Security</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
           
          </Nav>
          <Nav>
            <button className="franchise-now" href="#Home">
              Franchise Now!
            </button>
          </Nav>
          <Nav className="border-icon last">
            <FontAwesomeIcon
              className="facebook"
              icon={faFacebook}
              onClick={fbHandleClick}
              style={{ cursor: "pointer" }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCont;