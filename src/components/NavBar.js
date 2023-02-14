import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Coctail Master{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/categories">
            Categories
          </Nav.Link>
          <Nav.Link as={Link} to="/glasses">
            Glasses
          </Nav.Link>
          <Nav.Link as={Link} to="/ingridients">
            Ingridients
          </Nav.Link>
          <Nav.Link as={Link} to="/bartender-beginner">
            Bartender Beginner
          </Nav.Link>
          <Nav.Link as={Link} to="/bartender-veteran">
            Bartender Veteran
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
