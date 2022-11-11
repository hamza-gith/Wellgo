import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import Teslogo from "../../Images/tess.png";
import Teslogo3 from "../../Images/tess4.png";
import SaibaLogo from "../../Images/saiba1.png";
import PreLogo from "../../Images/pre.png";
import MenLogo from "../../Images/men.png";
import Group3Logo from "../../Images/Group3.png";
import Group5Logo from "../../Images/Group5.png";
import ArrLogo from "../../Images/arr.png";
import bigblue from "../../Images/bigblue.png";
import bigyellow from "../../Images/yrllowdot.png";
import blue from "../../Images/bluedot.png";
import Arrow from "../../Images/Frame.png";
import { ArrowRightOutlined } from "@ant-design/icons";
function Pacotes() {
  return (
    <div className="chega-de-main-div">
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "8rem" }}
        className="mbolie"
      >
        <Col lg={8} md={10} xs={24}>
          <div className="centerdivdiv">
            <div>
              <img className="onlymblview " src={blue} alt="" />
            </div>
            <img className="teslogo" src={Teslogo3} alt="" />
          </div>
        </Col>
        <Col lg={12} md={10} xs={24}>
          <div className="centerdivdiv">
            <div>
              <h1 className="text-online-div">
                Pacotes e Programas
                <br /> de fidelidade
              </h1>
              <p className="text-online-div-1">
                Crie programas de fidelidade, pacotes e combos de
                <br /> serviços, gerencie valores e validades. Aplicando
                <br />
                promoções e descontos em serviços que foram
                <br /> adquiridos por fidelidade ou em conjunto.
              </p>
              <div className="divmblbtn">
                <button className="btn-div-cada">
                  Cadastre-se agora mesmo
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "8rem" }}
      >
        <Col lg={13} md={11} xs={24}>
          <img className="bigblue56" src={bigblue} alt="" />
          <div className="centerdivdiv">
            <div>
              <h1 className="text-online-div">
                Compartilhe o sistema <br /> com seus funcionários <br />e
                defina permissões de <br />
                acesso
              </h1>
              <p className="text-online-div-1">
                Libere usuários e forneça facilmente permissões para
                <br /> que seus colaboradores consigam ou não acessar
                <br /> agendas, relatórios, dados de clientes e etc.
              </p>
              <div className="divmblbtn">
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
            <div>
              <img className="onlymblview " src={blue} alt="" />
            </div>
            <img className="teslogo" src={Teslogo} alt="" />
          </div>
        </Col>
      </Row>
      <img className="bigggyellow" src={bigyellow} alt="" />
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "8rem" }}
        className="mbolie"
      >
        <Col lg={8} md={10} xs={24}>
          <div className="centerdivdiv ">
            <img className="teslogo1" src={Group3Logo} alt="" />
            <img className="teslogo2" src={Group5Logo} alt="" />
            <img className="teslogo" src={MenLogo} alt="" />
          </div>
        </Col>
        <Col lg={12} md={10} xs={24}>
          <div className="centerdivdiv22">
            <div>
              <div className="centerblupre">
                <img className="logprelog" src={PreLogo} alt="" />
              </div>
              <h1 className="posttext">
                Posts para
                <br /> sua rede
                <a href="social" className="neg11">
                  social
                </a>
                <img className="arowlog22" src={Arrow} alt="" />
              </h1>

              <p className="text-online-div-1">
                Tenha em mãos posts personalizados e sugestões de <br />{" "}
                conteúdo para sua rede social. Altere cores, textos e fotos{" "}
                <br /> como bem entender.
              </p>
              <div className="divmblbtn">
                <button className="btn-div-cada">Teste o plano gratuito</button>
              </div>
              <img className="arrlogo" src={ArrLogo} alt="" />
            </div>
            <div>
              <img className="blueeedo11t" src={blue} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Pacotes;
