import { Container, Row } from "react-bootstrap";
import "./HeroSection.scss";
import heroImg from "../../assets/images/Illustration/16 [Converted]@2x.png";

export default function HeroSection() {
  return (
    <Container>
      <Row className="heroContainer">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h1>
              Florence <br /> agency
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={heroImg} alt="Hero Section Img" />
        </div>
      </Row>
    </Container>
  );
}
