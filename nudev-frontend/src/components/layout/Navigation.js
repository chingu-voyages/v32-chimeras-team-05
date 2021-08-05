import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const navList = [
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Resources", path: "/resources" },
  { id: 3, title: "Team", path: "/team" },
  { id: 4, title: "Login", path: "/login" },
];

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand as={Link} to="/">
        Nudev
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          {navList.map((navItem) => (
            <Nav.Link as={Link} to={navItem.path}>
              {navItem.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
