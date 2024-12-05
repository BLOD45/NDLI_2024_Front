import React, { useState } from 'react';
import TopBar from "../../components/TopBar/TopBar";

const Principale: React.FC = () => {
    const [mode, setMode] = useState(false);
  
    const toogleChangeMode = () => {
      setMode((prevMode) => !prevMode);
    }
  
    return (
      <>
        <div className={`app ${mode ? "human" : "ocean"}`}>
          <TopBar onToggle={toogleChangeMode} mode={mode}/>
          <main className='main-content'>
            
          </main>
        </div>
      </>
    );
  };

  export default Principale;