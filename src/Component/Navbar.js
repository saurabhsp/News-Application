import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import "./style.css";

function CustomNavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg={props.mode} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Navbar.Brand as={Link} to="/general">
        <img
          src={logo}
          height="28"
          className="d-inline-block align-top"
          alt="React Bootstrap Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="ml-auto"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            style={{ color: props.mode === "light" ? "black" : "white" }}
            as={Link}
            to="/general"
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{ color: props.mode === "light" ? "black" : "white" }}
            as={Link}
            to="/about"
          >
            {" "}
            About
          </Nav.Link>

          <Dropdown className="nav-item dropdown">
            <Dropdown.Toggle
              style={{ color: props.mode === "light" ? "black" : "white" }}
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ color: props.mode === "light" ? "black" : "white" }}>
              <Dropdown.Item as={Link} to="/business">
                Business
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/entertainment">
                Entertainment
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/general">
                General
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/health">
                Health
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/science">
                Science
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/sports">
                Sports
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/technology">
                Technology
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <div
          id="toggleButton"
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {" "}
            Enable dark Mode{" "}
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            />
            </label>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
