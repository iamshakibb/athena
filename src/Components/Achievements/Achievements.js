import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Achievements.scss";
import HappySVG from "../SVG/HappySVG";
import MarketingSVG from "../SVG/MarketingSVG";
import SurfaceSVG from "../SVG/SurfaceSVG";
import TransportationSVG from "../SVG/TransportationSVG";

export default function Achievements() {
  return (
    <div className="Achievements d-flex justify-content-center align-items-center mt-5 mb-5 pt-5">
      <Container>
        <Row>
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div className="pr-5">
              <h1>Our Achievements</h1>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letter.
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <Row className="text-center align-items-center justify-content-between">
              <Row className="achievementBox align-items-center justify-content-center">
                <div className="mr-3">
                  <HappySVG />
                </div>
                <div className="text-left">
                  <p>200+</p>
                  <p>Happy Clients</p>
                </div>
              </Row>
              <Row className="achievementBox1 align-items-center justify-content-center">
                <div className="mr-3">
                  <MarketingSVG />
                </div>
                <div className="text-left">
                  <p>200+</p>
                  <p>Happy Clients</p>
                </div>
              </Row>
              <Row className="achievementBox1 align-items-center justify-content-center">
                <div className="mr-3">
                  <SurfaceSVG />
                </div>
                <div className="text-left">
                  <p>200+</p>
                  <p>Happy Clients</p>
                </div>
              </Row>
              <Row className="achievementBox align-items-center justify-content-center">
                <div className="mr-3">
                  <TransportationSVG />
                </div>
                <div className="text-left">
                  <p>200+</p>
                  <p>Happy Clients</p>
                </div>
              </Row>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}
