import React from "react";
import Switch from "@mui/material/Switch";
import "./TopBar.css";

interface TopBarProps {
  onToggle: () => void;
  mode: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onToggle, mode }) => {
  return (
    <header className={`topbar ${mode ? "human" : "ocean"}`}>
      <h1>Mon Site</h1>
      <Switch
        className="switch-button"
        checked={mode} // L'état du switch suit `mode`
        onChange={onToggle} // Appelle la fonction `onToggle` lors du clic
        color="default" // Style neutre, peut être changé selon vos préférences
      />
    </header>
  );
  };

export default TopBar;