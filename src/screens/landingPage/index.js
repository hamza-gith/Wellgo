import React from "react";
import Falhar from "../../components/falhar";
import Footer from "../../components/footer";
import Navbar22 from "../../components/navbar";
import EstaTendo from "../../components/Esta-tendo";
import Scndcomponet from "../../components/secondcomponent";
import Text from "../../components/textarea";
import Qndex from "../../components/Abertura de comandas";
import CommonQuestions from "../../components/questions";
import Alternative from "../../components/alternative/Alternative";
import WellgoBem from "../../components/welllgobem";
import Comission from "../../components/comission";
import Pacotes from "../../components/pacotes";
import Aumente from "../../components/aumente";
import AumenteOne from "../../components/aumente1";

function LandingPage() {
  return (
    <div>
      <Navbar22 />
      <Text />
      <Scndcomponet />
      <EstaTendo />
      <Aumente />
      <Comission />
      <br />
      <br />
      <AumenteOne />
      <Pacotes />
      <br />
      <br />
      <Qndex />
      <WellgoBem />
      <Alternative />
      <Falhar />
      <CommonQuestions />
      <Footer />
    </div>
  );
}

export default LandingPage;
