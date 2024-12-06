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
          className={`app ${mode ? "ocean" : "human"}`}
          style={{
            backgroundImage: `url(${mode ? OceanImage : HumanImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh',
          }}
        >
          <TopBar onToggle={toggleChangeMode} mode={mode} />
          <main className="main-content">
            {/* Votre contenu principal */}
          </main>
        </div>
      </>
    );
  };

  export default PrincipalComp;