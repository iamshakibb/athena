import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./EmailForm.scss";

export default function EmailForm() {
  return (
    <Container className="email mt-5 py-5">
      <div className="col-md-12 heading text-center">
        <h1>Get your design right, right now</h1>
        <p>Be the first know our latest offers and updates!</p>
      </div>
      <div className="col-12 mt-5  d-flex align-items-center justify-content-center">
        <form className="emailForm d-flex align-items-center justify-content-center">
          <input className="w-75" type="email" placeholder="Enter Email" />
          <Button className="py-2 mr-4">Get Started</Button>
        </form>
      </div>
    </Container>
  );
}
