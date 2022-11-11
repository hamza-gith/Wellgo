import React from "react";
import "./style.css";
import { Collapse } from "antd";
import Arrow from "../../Images/arrow.png";
// import Point from "../../Images/point.png";
// import Point1 from "../../Images/point1.png";

const { Panel } = Collapse;
function CommonQuestions() {
  return (
    <div className="maincommon">
      <div className="container-fluid">
        <div className="pg">
          <h2 className="titleHolder">Perguntas frequentes</h2>
          <img className="arrowlogo55" src={Arrow} alt="" />
        </div>
        <div>
          <Collapse
            style={{
              backgroundColor: "white",
              marginTop: ".5rem",
              marginBottom: "1rem",
              color: "white",
              borderRadius: ".8rem",
              padding: "2rem",
            }}
            defaultActiveKey={["0"]}
          >
            {/* <img src={Point} alt="" className="checkcheck" /> */}
            <Panel
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              header="Lorem ipsum dolor sit amet "
              key="1"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
                <br /> dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                <br /> ex ea commodo consequat.
              </p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "white",
              marginTop: ".5rem",
              marginBottom: "1rem",
              borderRadius: ".5rem",
              padding: "2rem",
            }}
            defaultActiveKey={["0"]}
          >
            {/* <img src={Point1} alt="" className="checkcheck" /> */}
            <Panel
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              header="Consectetur adipiscing elit, sed do eiusmod tempor? "
              key="1"
            >
              <p>
                Each of our goats was randomly created using computer software
                that combined more than 350 handcrafted traits to create unique
                goats.
              </p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "white",
              marginTop: ".5rem",
              marginBottom: "1rem",
              borderRadius: ".5rem",
              padding: "2rem",
            }}
            defaultActiveKey={["0"]}
          >
            {/* <img src={Point1} alt="" className="checkcheck" /> */}
            <Panel
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              header="Incididunt ut labore et dolore magna aliqua? "
              key="1"
            >
              <p>Minting starts on December 15th, 15:00 (UTC +0)</p>
            </Panel>
          </Collapse>
          <Collapse
            style={{
              backgroundColor: "white",
              marginTop: ".5rem",
              marginBottom: "1rem",
              borderRadius: ".5rem",
              padding: "2rem",
            }}
            defaultActiveKey={["0"]}
          >
            {/* <img src={Point1} alt="" className="checkcheck" /> */}
            <Panel
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              header="Ut enim ad minim veniam? "
              key="1"
            >
              <p>
                You can mint Mabu NFT's through the official website
                (https://tobythegoat.io) or directly through the smart contract.
                Upon minting NFTs, these are automatically sent to your wallet
                and shown in your OpenSea account.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default CommonQuestions;
