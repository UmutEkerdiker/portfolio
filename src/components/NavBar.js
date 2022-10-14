import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
  //Create states to detect active section and if the user has scrolled
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  //Set the current state of scrolling
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  //set the value for the active link
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    console.log(activeLink);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/UmutEkerdiker">
                <img
                  className="contact-icons"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt=""
                />
              </a>
              <a href="https://www.linkedin.com/in/umut-ekerdiker-66a158154/">
                <img
                  className="contact-icons"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/the.rbp/">
                <img className="contact-icons" src={navIcon3} alt="" />
              </a>
            </div>
            <HashLink smooth to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Container>
      </Navbar>
    </Router>
  );
}

export default NavBar;
