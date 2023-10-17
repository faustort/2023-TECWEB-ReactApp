import { Link } from "react-router-dom";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Container>
        <Navbar.Brand>
          <Link to="/">Meu site</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-site" />
        <Navbar.Collapse id="menu-site">
          <Nav>
            <Nav.Item>
              <Link className="nav-link" to="/">
                Inicial
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/exercicio">
                Exercicio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contato">
                Contato
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
