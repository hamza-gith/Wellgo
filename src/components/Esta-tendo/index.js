import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import Teslogo from "../../Images/tess.png";
import Teslogo1 from "../../Images/tess2.png";
import Teslogo2 from "../../Images/tess3.png";
import Teslogo3 from "../../Images/tess4.png";
import Saibalogo4 from "../../Images/saiba1.png";
import Eulogo4 from "../../Images/eu.png";
import Gastando from "../../Images/gastando.png";
import BlueCircle from "../../Images/bluecircle.png";
import Yellowcircle from "../../Images/yellowcircle.png";
import Yellowdot from "../../Images/dot.png";
import blue from "../../Images/bluedot.png";
import bigyellow from "../../Images/yrllowdot.png";
import bigblue from "../../Images/bigblue.png";
import { ArrowRightOutlined } from "@ant-design/icons";
function EstaTendo() {
  return (
    <div className="chega-de-main-div" id="EstaTendo">
      <h2 className="text-chega-de11">CHEGA DE DOR DE CABECA</h2>
      <h3 className="textesta">
        Está tendo problema com
        <br /> a <span className="colorchangeofgastando">gestão</span> de seus
        clientes?
      </h3>
      <img src={Gastando} alt="gastando" className="gastandoimage" />
      <p className="text-chega-de-1">
        Momentos em que a fila de espera em seu salão e em outros horários ele
        fica as moscas?
        <br /> Não faz ideia dos seus custos e ganhos e de quanto precisa
        faturar para
        <br /> ter um bom ganho no final do mês?
      </p>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "14rem" }}
      >
        <Col lg={12} md={10} xs={24}>
          <div className="centerdivdiv">
            <div>
              <img className="yelowdot" src={Yellowdot} alt="" />
            </div>
            <div>
              <h3 className="text-online-div">Agendamento online</h3>
              <p className="text-online-div-1">
                Agendamentos e fila de espera, controle com facilidade
                <br />
                atendimentos com hora marcada, repetição de serviços por
                <br />
                período, fila de espera e bloqueio de horários.
              </p>
              <div className="centermblview">
                <div className="divblue">
                  <p className="saibblue">SAIBA MIAS</p>
                  <ArrowRightOutlined className="arrblue" />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={8} md={10} xs={24}>
          <div className="centerdivdiv">
            <img className="teslogo" src={Teslogo1} alt="" />
          </div>
        </Col>
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "10rem" }}
        className="revmblrow"
      >
        <Col lg={9} md={10} xs={24}>
          <div className="dotimgdisplay">
            <div>
              <img className="bluedot" src={blue} alt="" />
            </div>
            <div className="centerdivdiv">
              <img className="teslogo" src={Teslogo} alt="" />
            </div>
          </div>
        </Col>
        <Col lg={12} md={11} xs={24}>
          <div className="display22">
            <div className="centerdivdiv">
              <div>
                <h3 className="text-online-div">
                  Pagamento ou reserva
                  <br />
                  no cartão online
                </h3>
                <p className="text-online-div-155">
                  Tenha a opção de reservar valores no cartão
                  <br /> do cliente para garantir seu
                  <br /> comparecimento.
                </p>
                <div className="mblcenterviewcenter">
                  <button className="btn-div-cada">
                    Cadastre-se agora mesmo
                  </button>
                </div>
                <img className="yellowdotimg" src={bigyellow} alt="" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "14rem" }}
      >
        <Col lg={12} md={10} xs={24} id="seu">
          <div className="centerdivdiv">
            <div>
              <h3 className="text-online-div">Seu próprio aplicativo</h3>
              <p className="text-online-div-156">
                Disponibilize a seus clientes seu próprio aplicativo,
                <br /> com seu logotipo e cores, nas versões Android e IOS.
              </p>
              <div className="centermblview">
                <div className="divblue">
                  <p className="saibblue">EU QUERO</p>
                  <ArrowRightOutlined className="arrblue" />
                </div>
              </div>
            </div>
          </div>
          <img src={Yellowcircle} alt="yellowcircle" className="yellowcircle" />
        </Col>
        <Col lg={8} md={10} xs={24}>
          <div className="centerdivdiv">
            <img className="teslogo" src={Teslogo2} alt="" />
          </div>
        </Col>
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "10rem" }}
        className="revmblrow"
      >
        <Col lg={9} md={10} xs={24}>
          <div className="dsplay44">
            <div>
              <img className="bigblue" src={bigblue} alt="" />
            </div>
            <div className="centerdivdiv">
              <img className="teslogo" src={Teslogo3} alt="" />
            </div>
          </div>
        </Col>
        <Col lg={12} md={10} xs={24}>
          <div className="centerdivdiv">
            <div>
              <h3 className="text-online-div">Controle Financeiro</h3>
              <p className="text-online-div-1">
                Tenha em mãos relatórios financeiros com
                <br /> controles de entrada e saída. Visualize com clareza
                <br /> seus ganhos e gastos.
              </p>
              <div className="centermblview">
                <button className="btn-div-cada">Teste o plano gratuito</button>
              </div>
            </div>
            <img
              src={BlueCircle}
              alt="bluecircle"
              className="bluecircleofhefince"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EstaTendo;
