import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavMenu() {

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/css-animation">Terra Mater</Navbar.Brand>

        <Nav>      
          <Nav.Item>
            <Nav.Link as={Link} to="/page1">I.</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/page2">II.</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/page3">III.</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/page4">IV.</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/page5">V.</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>    
  )
}