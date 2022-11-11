import React from "react";
import "./style.css";
import Logo2 from "../../Images/boy.png";
import { Col, Row } from "antd";
import Dotlogo from "../../Images/dot.png";
import Message from "../../Images/message.png";
import Message1 from "../../Images/message1.png";
import Crosstick from "../../Images/crosstick.png";
import Ztick from "../../Images/z.png";
import { ArrowRightOutlined } from "@ant-design/icons";
function Scndcomponet() {
  return (
    <div>
      <div className="thirdmaindiv">
        <img className="crosslogo" src={Crosstick} alt="" />
        <Row justify="center" className="mobileview">
          <Col lg={9} md={20} xs={24}>
            <div className="circeldiv">
              <img className="messagelog" src={Message} alt="" />
              <img className="messagelog1" src={Message1} alt="" />
              <img className="logo123456" src={Logo2} alt="" />
            </div>
          </Col>
          <Col lg={6} md={20} xs={24}>
            <div className="divtext11">
              <div>
                <p className="textwhite">NOTIFICACOES</p>
                <p className="textwhite1">
                  Avisos e mensagens <br /> automaticas <br />
                  por Whatsapp
                </p>
                <div className="dodtdiv">
                  <img src={Dotlogo} alt="" />
                  <p className="textwhite2">Confirmacao de agendamento</p>
                </div>
                <div className="dodtdiv">
                  <img src={Dotlogo} alt="" />
                  <p className="textwhite2">Avisos de retorno</p>
                </div>
                <div className="dodtdiv">
                  <img src={Dotlogo} alt="" />
                  <p className="textwhite2">Alertas</p>
                </div>
                <div className="saibadiv">
                  <div>
                    <p className="saibatext">SAIBA MIAS</p>
                  </div>
                  <div>
                    <ArrowRightOutlined className="icons88" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <img className="zcrosslogo" src={Ztick} alt="" />
      </div>
    </div>
  );
}

export default Scndcomponet;
