import React from "react";

import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";

import client from "../utils/api-client/api-client";

import "./Nav.css";

function Navigation(props) {
  const history = useHistory();

  function handleLogout(event) {
    event.preventDefault();

    client.getLogout().then(() => {
      props.logout(false);
      localStorage.removeItem('state');
      history.push('/');
    })
  }

  return (
    <Navbar className="Navigation" variant="light">
      <Navbar.Brand as={Link} to="/">ExpenseM</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/my-expenses">My expenses</Nav.Link>
        <Nav.Link as={Link} to="/add-expenses">Add expenses</Nav.Link>
        <Nav.Link as={Link} to="#pricing">Balance</Nav.Link>
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