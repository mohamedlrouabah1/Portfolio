import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next"; 
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar() {
  const { t, i18n } = useTranslation(); 

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/Portfolio" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/Portfolio" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t('navbar.home')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t('navbar.about')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t('navbar.projects')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t('navbar.resume')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/mohamedlrouabah1/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            {/* Dropdown for language selection */}
            <Nav.Item className="fork-btn">
            <DropdownButton
              title="Language"
              align="end"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("fr")}>
                Français
              </Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
