import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NarBar() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
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
