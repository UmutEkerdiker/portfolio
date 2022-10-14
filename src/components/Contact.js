import { useState, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [sendStatus, setSendStatus] = useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendStatus("Sending...");

    emailjs
      .sendForm(
        "service_9c0bj4j",
        "template_y6e84nn",
        form.current,
        "8zbWPim7bd2kuAxUG"
      )
      .then(
        () => {
          setTimeout(setSendStatus("Sent!"), 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" placeholder="Last Name" name="lastName" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" placeholder="Email" name="email" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Telephone Number"
                    name="phone"
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea row="6" placeholder="Message" name="message" />
                  <button type="submit">
                    <span>{sendStatus}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
