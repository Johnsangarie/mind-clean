import React from "react"
import { Button, Col, Nav, Navbar, Row } from "react-bootstrap"

export function Navbarr() {

  
    return (

 
        <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#" className="ms-5">
        <img
            src="logo.png"
            height="60"
            className="d-inline-block align-top"
            alt="Mind Cleaning logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end  me-5 pe-3">
          <Nav navbarScroll  className="p-3" >
            <Nav.Link style={{ textAlign: "center" }} href="#service">
              Services
            </Nav.Link>
            <Nav.Link style={{ textAlign: "center" }} href="#testinomials">
              Testinomials
            </Nav.Link>
            <Nav.Link style={{ textAlign: "center" }} href="#about">
              About Us
            </Nav.Link>
            <Nav.Link style={{  borderRadius: "15px", textAlign: "center" , backgroundColor:'#2879ad'}}  href="#action2">
            <Button href="#get-estimate">   Get Estimate </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


     )


}