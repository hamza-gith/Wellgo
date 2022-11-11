import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "../../Images/login.png";
import Wellgo11 from "../../Images/well.png";
import "./style.css";

function Navbar22() {
  return (
    <div className="paddingofnavbar">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="black">
        {/* <Container> */}
        <Navbar.Brand href="#home">
          <img className="Wellgo11" src={Wellgo11} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#EstaTendo">
              <p className="araseu">Para seu negócio</p>
            </Nav.Link>
            <Nav.Link href="#seu">
              <p className="araseu">Aplicativo</p>
            </Nav.Link>
            <Nav.Link href="#Alternative">
              <p className="araseu">Planos</p>
            </Nav.Link>
            <Nav.Link href="#Perguntas frequentes">
              <p className="araseu">Perguntas frequentes</p>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#Login ">
              <div className="logindiv">
                <img className="login" src={Login} alt="" />
              </div>
            </Nav.Link>
            <Nav.Link
              className="cadastrar"
              eventKey={2}
              href="#Cadastrar-se agora mesmo"
            >
              <p className="cadastrar11">Cadastrar-se agora mesmo</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default Navbar22;
