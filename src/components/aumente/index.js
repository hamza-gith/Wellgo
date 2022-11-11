import React from "react";
import "./style.css";
import AumenteLogo from "../../Images/women1.png";
import AumenteLogo1 from "../../Images/Group.png";
import AumenteLogo3 from "../../Images/cada.png";
import Yellowdot from "../../Images/dot.png";
import Doubleline from "../../Images/dubleline.png";
import Bigyellow from "../../Images/yrllowdot.png";
function Aumente() {
  return (
    <div className="mainAumente">
      <div>
        <img className="rayys" src={Doubleline} alt="" />
      </div>
      <div className="bgcolorblue">
        <img className="AumenteLogoimg" src={AumenteLogo} alt="" />
        <img className="Aumenteimg1" src={AumenteLogo1} alt="" />
        <p className="Aumentetext">Benefícios</p>
        <br />
        <br />
        <p className="Aumentetext1">
          Aumente em até
          <br /> 30% sua taxa de retorno.
        </p>
        <div>
          <img className="logoame" src={AumenteLogo3} alt="" />
        </div>
      </div>
      <div>
        <img className="yelowdddot" src={Yellowdot} alt="" />
      </div>

      {/* <img className="yellowpngdot" src={Bigyellow} alt="" /> */}
    </div>
  );
}

export default Aumente;
