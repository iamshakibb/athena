import React from "react";
import { Container, Row } from "react-bootstrap";
import About1 from "../../assets/images/Illustration/Group 65@2x.png";
import About2 from "../../assets/images/Illustration/Group 66@2x.png";
import About3 from "../../assets/images/Illustration/Group 69@2x.png";
import About4 from "../../assets/images/Illustration/Group 72@2x.png";
import Heading from "../Heading/Heading";
import "./About.scss";

export default function About() {
  return (
    <>
      <div className="aboutContainer py-5  mt-5" id="about">
        <Container>
          <Heading
            heading="What we do"
            message="Our main focus is to make the User Experience very
                simple and easy. Simplicity is our Strength."
          />
          <Row className="mt-5">
            <div className="col-md-3  text-center">
              <div className="aboutBox">
                <div className="aboutImg">
                  <img src={About1} alt="About Img" />
                </div>
                <div className="mt-4">
                  <h6>Experience Design</h6>
                  <p className="paragraphColor mt-3">The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  text-center">
              <div className="aboutBox">
                <div className="aboutImg">
                  <img src={About2} alt="About Img" />
                </div>
                <div className="mt-4">
                  <h6>Interface Design</h6>
                  <p className="paragraphColor mt-3">The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  text-center">
              <div className="aboutBox">
                <div className="aboutImg">
                  <img src={About3} alt="About Img" />
                </div>
                <div className="mt-4">
                  <h6>Prototyping</h6>
                  <p className="paragraphColor mt-3">The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  text-center">
              <div className="aboutBox">
                <div className="aboutImg">
                  <img src={About4} alt="About Img" />
                </div>
                <div className="mt-4">
                  <h6>Illustration</h6>
                  <p className="paragraphColor mt-3">The point of using Lorem Ipsum is that it has a more-orless normal.</p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
