import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./SideBarMenu.css";

const SideBarMenu = ({setMode}) => {
    const navigate = useNavigate();

    const ToggleRetroMode = () => {
        setMode(prevMode => prevMode === "mode true retro" ? "mode retro" : "mode true retro");
    }

    const Redirec = () => {
        window.location.href = "https://matias.me/nsfw/"; //heu c fine trust
    }

    return (
        <div className="sidebar">
            <span className="nes-text is-disabled">
                <h2> Menu </h2>
            </span>
            <button onClick={() => navigate("/")}>Acceuil</button>
            <button onClick={ToggleRetroMode}> True retro</button>
            <button onClick={Redirec}>random feature</button>
        </div>
    )
}

export default SideBarMenu;