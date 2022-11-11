import React from "react";
import "./style.css";
import FalharLogo from "../../Images/up.png";
import FalharLogo1 from "../../Images/down.png";
import FalharLogo3 from "../../Images/Arrowup.png";
import FalharLogo4 from "../../Images/falhar.png";
import FalharLogo5 from "../../Images/falhar1.png";

function Falhar() {
  return (
    <div className="mainfalhar">
      <p className="falharpra">a escolha é sua!</p>
      <h1 className="falharheading">
        Quem foge da organização,
        <br /> organiza{" "}
        <a href="falhar" className="neg">
          falhar
        </a>
        .
      </h1>
      <img className="falharlogo" src={FalharLogo} alt="" />
      <img className="falharlogo1" src={FalharLogo1} alt="" />
      <div className="btndiv">
        <button className="btnfalhar">Cadastre-se agora mesmo</button>
      </div>
      <img className="lgogo3" src={FalharLogo3} alt="" />
      <img className="lgogo4" src={FalharLogo4} alt="" />
      <img className="lgogo5" src={FalharLogo5} alt="" />
    </div>
  );
}

export default Falhar;
