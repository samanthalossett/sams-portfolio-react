import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css";

function Navbar1(){
    return(
        <div className="navbardiv-container">
          <ul className="navbar-ul">
            <li className="navbarli-1">
            <Nav.Link href="/mywork.js">My Work</Nav.Link>
            </li>
            <li className="navbarli-2">
            <Nav.Link href="/about.js">Back to Browse</Nav.Link>
            </li>
            <li className="navbarli-3">
            <Nav.Link href="/contact.js">Contact Me</Nav.Link>
            </li>
          </ul>
        </div>
    )
}

export default Navbar1;
//          <Navbar bg="light" expand="lg">
//    <Navbar.Brand href="/">My Portfolio</Navbar.Brand> 
   {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/mywork.js">My Work</Nav.Link>
      <Nav.Link href="/about.js">Back to Browse</Nav.Link>
      <Nav.Link href="/contact.js">Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>   */}