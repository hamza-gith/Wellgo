import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import Teslogo from "../../Images/tess.png";
import Teslogo1 from "../../Images/tess2.png";
import Teslogo3 from "../../Images/tess4.png";
import SaibaLogo from "../../Images/saiba1.png";
import Bigblue from "../../Images/bigblue.png";
import bigyellow from "../../Images/yrllowdot.png";
import blue from "../../Images/bluedot.png";
import Yellowdot from "../../Images/dot.png";
import Eulogo4 from "../../Images/eu.png";
import { ArrowRightOutlined } from "@ant-design/icons";
function Comission() {
  return (
    <div className="chega-de-main-div">
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "8rem" }}
        className="mblreverseview"
      >
        <Col lg={8} md={10} xs={24}>
          <div className="centerdivdiv">
            <img className="teslogo" src={Teslogo} alt="" />
          </div>
        </Col>
        <Col lg={12} md={10} xs={24}>
          <div className="centerdivdiv">
            <div>
              <h1 className="text-online-div">
                Comissionamento
                <br /> automático de
                <br /> funcionários
              </h1>
              <p className="text-online-div-1">
                Elabore suas regras de comissionamentos por serviços,
                <br /> produtos, colaboradores ou assistentes. Defina os
                <br /> valores e formas de recebimento de acordo com seu <br />{" "}
                modelo de trabalho.
              </p>
              <div className="mblcenterviewcenter">
                <div className="divblue">
                  <p className="saibblue">SAIBA MIAS</p>
                  <ArrowRightOutlined className="arrblue" />
                </div>
              </div>
              <img className="bigbluepng" src={Bigblue} alt="" />
            </div>
          </div>
        </Col>
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginTop: "5rem", columnGap: "8rem" }}
      >
        <Col lg={12} md={11} xs={24}>
          <div>
            <img className="bluedot11" src={Yellowdot} alt="" />
          </div>
          <div>
            <img className="midiumdot" src={bigyellow} alt="" />
          </div>
          <div className="centerdivdiv">
            <div>
              <h1 className="text-online-div1144">Gestão de estoque</h1>
              <p
                style={{ marginBottom: "-1rem" }}
                className="text-online-div-1"
              >
                Cadastre produtos e de baixa automática de estoque
                <br /> com base na venda ou uso de produtos. É possível
                <br /> configurar a quantidade de produtos utilizados em cada
                <br />
                serviço e o sistema realizará a baixa no estoque
                <br />
                automaticamente.
              </p>
              <div className="mblcenterviewcenter">
                <button className="btn-div-cada1">
                  Cadastre-se agora mesmo
                </button>
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
        style={{ marginTop: "5rem", columnGap: "8rem" }}
        className="mblreverseview"
      >
        <Col lg={8} md={10} xs={24}>
          <div className="centerdivdiv">
            <img className="teslogo" src={Teslogo3} alt="" />
          </div>
        </Col>
        <Col lg={13} md={10} xs={24}>
          <div className="centerdivdiv">
            <div>
              <img className="yelowdot11" src={blue} alt="" />

              <h1 className="text-online-div"> Pesquisa de satisfação</h1>
              <p className="text-online-div-1">
                Após o cliente utilizar seus serviços, o sistema
                <br /> automaticamente envia uma pesquisa para ele. Onde ele{" "}
                <br />
                poderá dar nota aos serviços prestados e um feedback que <br />
                servirá para a implementação de melhorias.
              </p>
              <div className="mblcenterviewcenter">
                <div className="divblue">
                  <p className="saibblue">EU QUERO</p>
                  <ArrowRightOutlined className="arrblue" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Comission;
