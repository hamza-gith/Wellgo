import React from "react";
import "./style.css";
import Circle from "../../Images/circle.png";
import Arrorwdown from "../../Images/arrowdown.png";
import Alternativ from "../../Images/alternative.png";
import Alternativ1 from "../../Images/Vector.png";
import { Row, Col, Button } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
function Alternative() {
  return (
    <div className="maindivofalternative" id="Alternative">
      <img className="Alternativ1logo" src={Alternativ1} alt="" />
      <div>
        <div className="circleimage">
          <img src={Circle} alt="circle" />
          <p className="planostext">Planos</p>
          <img src={Arrorwdown} className="arrowdownimage" alt="circle" />
        </div>
        <h1 className="headingtextofaternatives">
          Nós fornecemos alternativas
        </h1>
        <h1 className="headingtextofaternatives">
          <span className="exclusivestext">exclusivas</span> para você.
        </h1>
        <img src={Alternativ} className="alternativeimage" alt="circle" />
        <div className="rowresponsives">
          <Row className="rowofthealternative" justify={"center"} gutter={20}>
            <Col lg={7} xl={7} md={7} className="coloumnofthealternative">
              <h1 className="titleofthecardsalternatives">GRATUITO</h1>
              <h1 className="ratesofthecards">
                R$ 00 <span className="alterrates">/Mensal</span>
              </h1>
              <p className="ptagofthecards">
                Lorem ipsum dolor sit amet. Et
                <br /> quibusdam adipisci est soluta
              </p>
              <div className="checkedpointcircle">
                <div className="divforresponsiveness">
                  <div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="buttonofthecodealternative">
                  Escolher Plano
                </Button>
              </div>
            </Col>
            <Col lg={7} xl={7} md={7} className="coloumnofthealternative22">
              <h1 className="titleofthecardsalternatives22">MAX</h1>
              <h1 className="ratesofthecards">
                R$ 129 <span className="alterrates">/Mensal</span>
              </h1>
              <p className="ptagofthecards">
                Lorem ipsum dolor sit amet. Et
                <br /> quibusdam adipisci est soluta
              </p>
              <div className="checkedpointcircle">
                <div className="divforresponsiveness">
                  <div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="buttonofthecodealternative">
                  Escolher Plano
                </Button>
              </div>
            </Col>
            <Col lg={7} xl={7} md={7} className="coloumnofthealternative">
              <h1 className="titleofthecardsalternatives">PRO</h1>
              <h1 className="ratesofthecards">
                R$ 229 <span className="alterrates">/Mensal</span>
              </h1>
              <p className="ptagofthecards">
                Lorem ipsum dolor sit amet. Et
                <br /> quibusdam adipisci est soluta
              </p>
              <div className="checkedpointcircle">
                <div className="divforresponsiveness">
                  <div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="displayflexoficons">
                      <CheckCircleFilled
                        style={{
                          color: " #1d4fff",
                          fontSize: "1.2rem",
                          marginTop: "-1rem",
                          marginRight: "1rem",
                        }}
                      />
                      <p className="textcolorchange ">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="buttonofthecodealternative">
                  Escolher Plano
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Alternative;
