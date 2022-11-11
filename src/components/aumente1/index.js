import React from "react";
import "./style.css";
import AumenteOneLogo from "../../Images/men2.png";
import AumenteOneLogo1 from "../../Images/Group1.png";
import AumenteLogo3 from "../../Images/cada.png";
import blue from "../../Images/bluedot.png";
import YellowMen from "../../Images/yellmen.png";
import Yellowtriangle from "../../Images/triangle.png";

import { Row, Col } from "antd";
function AumenteOne() {
  return (
    <div>
      <img className="bluedo33t" src={blue} alt="" />
      <div className="AumenteOnemain">
        <div className="bgcolorblueAmu">
          <Row justify="centers" className="rowmobile">
            <Col lg={10} md={10} xs={24}>
              <div className="centeramudiv">
                <img className="YellowMenonmen" src={Yellowtriangle} alt="" />
                <img
                  className="AumenteOneLogoimg"
                  src={AumenteOneLogo}
                  alt=""
                />
                <img className="AumenteOneimg1" src={AumenteOneLogo1} alt="" />
              </div>
            </Col>
            <Col lg={12} md={10} xs={24}>
              <div className="centeramudiv1">
                <div>
                  <p className="AumenteOnetext">
                    vai perder uma oportunidade dessas?
                    <br />
                    <br />
                    <p className="AumenteOnetext12">
                      Aumente em até 70%
                      <br /> seus agendamentos
                      <br /> automáticos
                    </p>
                  </p>
                  <div className="centerdivamudiv">
                    <img className="logoAumenteOne" src={AumenteLogo3} alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <img className="bluedo333t" src={blue} alt="" />
          </Row>
          <img className="YellowMen" src={YellowMen} alt="" />
          <img className="bluedo333tt" src={blue} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AumenteOne;
