import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NarBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyParx
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/PackingList">
            Packing List
          </Nav.Link>
          <Nav.Link as={Link} to="/parklist">
            Park List
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
