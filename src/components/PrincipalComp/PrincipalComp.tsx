import React, { useState } from 'react';
import TopBar from "../TopBar/TopBar";
import HumanPage from '../HumanPage/HumanPage';
import OceanPage from '../OceanPage/OceanPage';

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
          {mode ? <HumanPage></HumanPage> : < OceanPage />}
        </div>

      </>
    );
};

export default PrincipalComp;