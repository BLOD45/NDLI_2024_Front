import React, { useState } from 'react';
import TopBar from "./components/TopBar";
import './App.css';

function App() {
  const [mode, setMode] = useState(false);

  const toogleChangeMode = () => {
    setMode((prevMode) => !prevMode);
  }

  return (
    <>
      
    </>
  )
}

export default App
