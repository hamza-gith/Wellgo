import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import FooterLogo from "../../Images/well.png";
import Login from "../../Images/login.png";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <>
      <div className="mainfooter">
        <Container>
          <Row justify="center">
            <Col lg={5} md={10} xs={24}>
              <div className="footerdivtext">
                <div>
                  <img className="fotterlogog" src={FooterLogo} alt="" />
                  <div className="login77div">
                    <img className="login77" src={Login} alt="" />
                  </div>
                  <p className="footerpra">Cadastro</p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={10} xs={24}>
              <div className="footerdivtext">
                <div>
                  <h3 className="footergheading">a wellgo</h3>
                  <p className="footerpra">Para seu negócio </p>
                  <p className="footerpra">Aplicativo</p>
                  <p className="footerpra">Planos</p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={10} xs={24}>
              <div className="footerdivtext">
                <div>
                  <h3 className="footergheading">transparência</h3>
                  <p className="footerpra">Politica de Privacidade</p>
                  <p className="footerpra">Politica de Segurança</p>
                  <p className="footerpra">Perguntas frequentes</p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={10} xs={24}>
              <div className="footerdivtext">
                <div>
                  <h3 className="footergheading">fale conosco</h3>
                  <p className="footerpra"> Fale com o Suporte</p>
                  <p className="footerpra">meajuda@wellgo.com.br</p>
                  <p className="footerpra">Atendimento rápido</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottomfooter">
        <h5 className="bottomtext"> © wellgo. Todos os direitos reservados.</h5>
      </div>
    </>
  );
}

export default Footer;
