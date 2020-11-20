import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../../assets/images/Illustration/Group 86.png";
import { faBehance, faDribbble, faFacebook, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";

export default function Footer() {
  return (
    <Container className="mt-5 py-3 contact" id="contact">
      <Row>
        <div className="col-md-4">
          <div className="logo">
            <img src={logo} alt="LOGO" />
          </div>
          <div className="socialLinks mt-3">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faBehance} />
          </div>
        </div>
        <div className="col-md-2 d-flex text-left d-flex justify-content-center">
          <ul>
            <li>Features</li>
            <li>Enterprise</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="col-md-2 d-flex text-left d-flex justify-content-center">
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="col-md-2 d-flex text-left d-flex justify-content-center">
          <ul>
            <li>About Us</li>
            <li>Terms of Service</li>
            <li>Security</li>
            <li>Login</li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}
