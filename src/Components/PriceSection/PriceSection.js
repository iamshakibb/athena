import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./PriceSection.scss";

export default function PriceSection() {
  return (
    <Container className="mt-5 p-5 mb-5 priceSection" id="price">
      <Row className="align-item-center justify-content-center text-center">
        <div className="col-md-12 mb-5 text-center heading">
          <h1>Choose Your Dedicated Team</h1>
        </div>
        <div className="col-md-4">
          <div className="priceOption">
            <div className="price">
              <h1>$199</h1>
              <p>For Basic</p>
            </div>
            <ul>
              <li>Homepage</li>
              <li>No Inner Page</li>
              <li>Asset file</li>
              <li>Source file</li>
              <li>Free Stock Photos</li>
              <li>10 Days Free Support</li>
              <li>24/7 Support</li>
              <Button className="px-4 mt-5">Order Now</Button>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="priceOption">
            <div className="price">
              <h1>$399</h1>
              <p>For Preferred</p>
            </div>
            <ul>
              <li>Homepage</li>
              <li>4 Inner Pages</li>
              <li>Asset file</li>
              <li>Source file</li>
              <li>Free Stock Photos</li>
              <li>20 Days Free Support</li>
              <li>24/7 Support</li>
              <Button className="px-4 mt-5">Order Now</Button>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="priceOption">
            <div className="price">
              <h1>$599</h1>
              <p>For Elite</p>
            </div>
            <ul>
              <li>Homepage</li>
              <li>8 Inner Pages</li>
              <li>Asset file</li>
              <li>Source file</li>
              <li>Free Stock Photos</li>
              <li>30 Days Free Support</li>
              <li>24/7 Support</li>
              <Button className="px-4 mt-5">Order Now</Button>
            </ul>
          </div>
        </div>
      </Row>
    </Container>
  );
}
