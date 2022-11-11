import React from "react";
import "./style.css";
import Logo from "../../Images/tick.png";
import Sticks from "../../Images/stickup.png";
import Sticks1 from "../../Images/stickleft.png";
import Arrow from "../../Images/arrow.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CheckCircleFilled } from "@ant-design/icons";
function Text() {
  return (
    <div className="maintextdiv ">
      <div className="textdiv">
        <div>
          <p className="aumetexttext">
            Aumente em até 70% seus agendamentos automáticos
          </p>
        </div>
        <div>
          <ArrowRightOutlined className="iconstyle55" />
        </div>
      </div>
      <div className="paddingdiv">
        <img className="sticklogo1" src={Sticks1} alt="" />
        <div style={{ marginTop: "7rem" }}>
          <h1 className="text22">
            O melhor aplicativo de agendamento <br></br>e gestão para seu
            <a href="negócio" className="neg">
              negócio
            </a>
            <img className="arowlog" src={Arrow} alt="" />
          </h1>
        </div>
        <div className="maindiv">
          <div>
            <img className="logo576" src={Logo} alt="" />
          </div>
          <div className="centcenter">
            <input placeholder="Seu melhor e-mail" className="input11" />
          </div>
          <div>
            <button className="button">Teste o plano gratuito</button>
          </div>
        </div>
        <div className="imgtext">
          <div>
            <CheckCircleFilled
              style={{
                color: " #1d4fff",
                fontSize: "1.5rem",
                marginRight: ".5rem",
                marginBottom: "1rem",
                marginTop: ".8rem",
              }}
              className="iconcheck"
            />
          </div>
          <div className="comontext">
            <p className="commontext22">É</p>
            <p className="colourtext"> 100% gratuito </p>
            <p className="commontext22">
              e nunca enviaremos mais de um e-mail por mês.
            </p>

            <img className="sticklogo" src={Sticks} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
