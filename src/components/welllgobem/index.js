import React from "react";
import "./style.css";
import WellLogo from "../../Images/women.png";
import WellLogo1 from "../../Images/sticks.png";
import bigblue from "../../Images/bigblue.png";
function WellgoBem() {
  return (
    <div className="mainwellgobem">
      <div className="bgcolor">
        <img className="welllimg" src={WellLogo} alt="" />
        <img className="welllimg1" src={WellLogo1} alt="" />
        <p className="welgobemtext">
          “A Wellgo é bem intuitiva, fácil e rápida.
          <br /> Possui um suporte incrível e ágil. <br /> É um, app excelente e
          com ferramentas assertivas <br /> Tudo que o meu negócio precisava!”{" "}
          <br />
          <br />
          <br />
          <p className="welgobemtext1"> — Carina Oliveira, CEO da Alcon </p>
        </p>
      </div>
      <div>
        <img className="bigbllllue" src={bigblue} alt="" />
      </div>
    </div>
  );
}

export default WellgoBem;
