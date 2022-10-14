import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col sm={12} className="text-center">
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
            <p>
              © Umut Ekerdiker<br></br>
              <br></br>2022
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
