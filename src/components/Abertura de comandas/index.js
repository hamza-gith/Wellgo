import React from "react";
import Logo3 from "../../Images/doller.png";
import Logo4 from "../../Images/saiba .png";
import Logo5 from "../../Images/rayline.png";
import Logo6 from "../../Images/heart.png";
import Logo7 from "../../Images/comp.png";
import bigyellow from "../../Images/yrllowdot.png";
import "./style.css";
import { Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
function Qndex() {
  return (
    <div>
      <img className="bigyyyellow" src={bigyellow} alt="" />
      <Row justify="center">
        <Col lg={6} md={6} xs={24}>
          <div className="comands22">
            <div>
              <div>
                <img className="logoimg4" src={Logo3} alt="" />
              </div>
              <div>
                <h1 className="qndextext">
                  Abertura <br></br>de comandas
                </h1>
                <p className="qndextext1">
                  Controle o consumo<br></br> de produtos e <br></br>serviços de
                  seus <br></br>clientes através de <br></br>comandas.
                </p>
                <div className="mblcenterviewcenter margintopkapi">
                  <div className="divblue">
                    <p className="saibblue">SAIBA MIAS</p>
                    <ArrowRightOutlined className="arrblue" />
                  </div>
                </div>
                <div>
                  <img className="belowline22" src={Logo5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} xs={24}>
          <div className="comands22">
            <div>
              <div>
                <img className="logo3" src={Logo6} alt="" />
              </div>
              <div>
                <h1 className="qndextext">
                  Gerenciamento
                  <br /> de planos de saúde
                </h1>
                <p className="qndextext1">
                  Selecione os planos de
                  <br /> saúde atendidos e limite o <br /> horário/número de{" "}
                  <br />
                  atendimentos para cada <br /> plano.
                </p>
                <div className="mblcenterviewcenter margintopkapi">
                  <div className="divblue">
                    <p className="saibblue">SAIBA MIAS</p>
                    <ArrowRightOutlined className="arrblue" />
                  </div>
                </div>
                <div>
                  <img className="belowline" src={Logo5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} xs={24}>
          <div className="comands22">
            <div>
              <div>
                <img className="logo3" src={Logo7} alt="" />
              </div>
              <div>
                <h1 className="qndextext">
                  Site<br></br> próprio
                </h1>
                <p className="qndextext1">
                  Tenha um site próprio com sua <br /> cara, permita
                  agendamentos <br /> através do site aumente a <br />{" "}
                  visibilidade de seu negócio e <br /> facilidade com que seus{" "}
                  <br />
                  clientes realizam <br /> agendamentos.
                </p>
                <div className="mblcenterviewcenter">
                  <div className="divblue">
                    <p className="saibblue">SAIBA MIAS</p>
                    <ArrowRightOutlined className="arrblue" />
                  </div>
                </div>
                <div>
                  <img className="belowline" src={Logo5} alt="" />
                </div>
                <img className="bigyywyellow" src={bigyellow} alt="" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Qndex;
