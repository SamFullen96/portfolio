import React from "react";
import { Navbar, Nav } from "react-bootstrap";

type props = {
  hidden: boolean;
  currentSection: string | null;
};

const Navigation = ({ hidden, currentSection }: props) =>
  hidden ? null : (
    <Navbar bg="light" expand className="navigation" fixed="top">
      {/* <Navbar.Brand href="#home">Sam Fullen</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-center">
        <Nav>
          <Nav.Link href="#about" active={currentSection === "about"}>
            About Me
          </Nav.Link>
          <Nav.Link href="#experience" active={currentSection === "experience"}>
            Experience
          </Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

export default Navigation;
