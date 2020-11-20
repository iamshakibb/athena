import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import servicesImg from "../../assets/images/Illustration/20 [Converted]@2x.png";
import "./Services.scss";

export default function Services() {
  return (
    <div className="d-flex align-items-center justify-content-center mt-3 mb-5 services" id="services">
      <Container>
        <Row>
          <div className="col-md-6">
            <img className="img-fluid" src={servicesImg} alt="services Img" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-right">
            <div>
              <h1>Stay Running & Project</h1>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letter.
              </p>
              <Button className="px-4">Contact us</Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
