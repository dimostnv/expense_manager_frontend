import React from "react";

import {Nav, Navbar, Dropdown, DropdownButton} from "react-bootstrap";
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
      <DropdownButton id="Profile" className="justify-content-end myProfile"
                      variant="info" drop="left" title={props.user}>
        <Dropdown.Item>Statistics</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  )
}

export default Navigation;