import React from "react";
import { Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";

function NavHeader(props) {
  const tabs = ["Portfolio", "Resume", "Contact"];
  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="lg"
      className="color-nav justify-content-between"
    >
      <Navbar.Brand
        href="#aboutme"
        onClick={() => props.handlePageChange("AboutMe")}
      >
        <h1>Kyle Condie</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="#aboutme"
            onClick={() => props.handlePageChange("AboutMe")}
          >
            About Me
          </Nav.Link>
          {tabs.map((tab) => (
            <Nav.Link
              key={tab}
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
            >
              {tab}
            </Nav.Link>
          ))}
        </Nav>
        <NavDropdown.Divider />
        <Nav>
          <NavLink href="https://github.com/Frankenshtien">
            <i className="fab fa-github"></i>
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/kyle-condie-6ba8111a1/">
            <i className="fab fa-linkedin-in"></i>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavHeader;
