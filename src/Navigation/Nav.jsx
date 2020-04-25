import React from "react";

import {Nav, Navbar, NavDropdown} from "react-bootstrap";

import "./Nav.css";

function Navigation() {
  return (
    <Navbar className="Navigation" variant="light">
      <Navbar.Brand href="#home">ExpenseM</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Add expenses</Nav.Link>
        <Nav.Link href="#pricing">Balance</Nav.Link>
      </Nav>
      <NavDropdown id="Profile" className="justify-content-end myProfile" title="Profile">
        <NavDropdown.Item>Statistics</NavDropdown.Item>
        <NavDropdown.Item>Settings</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  )
}

export default Navigation;