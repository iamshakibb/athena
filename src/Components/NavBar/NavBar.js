import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.scss";
import logo from "../../assets/images/Illustration/Group 86.png";

export default function NavBar() {
  return (
    <Container>
      <Navbar expand="md">
        <Navbar.Brand href="#home" className="logo">
          <img src={logo} alt="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav NavMenu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#price">Pricing</Nav.Link>
            <Nav.Link href="#team">Our Team</Nav.Link>
            <Button className="px-4 py-2">Contact us</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
