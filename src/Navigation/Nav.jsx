import React from "react";

import {Nav, Navbar, NavDropdown} from "react-bootstrap";

import client from "../utils/api-client/api-client";

import "./Nav.css";

function Navigation(props) {

  function handleLogout(event) {
    event.preventDefault();

    client.getLogout().then(() => {
      props.logout(false);
    })
  }

  return (
    <Navbar className="Navigation" variant="light">
      <Navbar.Brand href="#home">ExpenseM</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Add expenses</Nav.Link>
        <Nav.Link href="#pricing">Balance</Nav.Link>
      </Nav>
      <NavDropdown id="Profile" className="justify-content-end myProfile" title={props.user}>
        <NavDropdown.Item>Statistics</NavDropdown.Item>
        <NavDropdown.Item>Settings</NavDropdown.Item>
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  )
}

export default Navigation;