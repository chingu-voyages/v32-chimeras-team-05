import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routesList } from "../../helpers/urlLinks";
// import { useAuth } from "../../contexts/AuthContext";

const Navigation = () => {
  // const { logout } = useAuth();
  // const { currentUser } = useAuth();
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand as={Link} to="/">
        Nudev
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          {Object.values(routesList)
            .filter((route) => route.mainNav === true)
            .map((navItem, idx) => (
              <Nav.Link key={`nav-item-${idx}`} as={Link} to={navItem.path}>
                {navItem.title}
              </Nav.Link>
            ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
