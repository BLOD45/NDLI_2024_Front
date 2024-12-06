import React, { useState } from 'react';
import TopBar from "../TopBar/TopBar";
import HumanImage from "../../assets/images/principal/human.png";
import OceanImage from "../../assets/images/principal/ocean.jpg";

const PrincipalComp: React.FC = () => {
    const [mode, setMode] = useState(false);
  
    const toggleChangeMode = () => {
      setMode((prevMode) => !prevMode);
    }
  
    return (
      <>
        <div
          style={{ height: "10vh", width: "100vw"}}
          className={`app ${mode ? "ocean" : "human"}`}
        >
          <TopBar onToggle={toggleChangeMode} mode={mode} />
          <main className="main-content">
          </main>
        </div>

        <div
          style={{ height: "90vh", width: "100vw", alignContent: "center"}}
        >
          {mode ? <h1>Test Ocean</h1> : <h1>Test Human</h1>}
        </div>

      </>
    );
};

export default PrincipalComp;