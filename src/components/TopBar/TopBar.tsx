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
      <a href="/" className="logo" style={{ color: "white", padding: "10px" }}> Accueil </a>
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