import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavMenu() {

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/#">Home</Navbar.Brand>

        <Nav>      
          <Nav.Item>
            <Nav.Link as={Link} to="/page1">Page1</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/page2">Page2</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/page3">Page3</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/page4">Page4</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>    
  )
}