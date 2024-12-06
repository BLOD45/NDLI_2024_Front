import React, { useEffect, useState } from "react";
import Credit from "../../components/CreditPage/PersonComp";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import "./CreditsPage.css"

// Importation des images directement
import archiImage from "../../assets/images/PP/archi.png";
import cerzenImage from "../../assets/images/PP/cerzen.png";
import colibryImage from "../../assets/images/PP/colibry.png";
import cyrersImage from "../../assets/images/PP/cyrers.png";
import dryloxxImage from "../../assets/images/PP/dryloxx.png";
import fyneImage from "../../assets/images/PP/fyne.png";
import hypoImage from "../../assets/images/PP/hypo.png";
import kazenoImage from "../../assets/images/PP/kazeno.png";
import ombruImage from "../../assets/images/PP/ombru.png";
import zephImage from "../../assets/images/PP/zeph.png";
import konami from "../../assets/images/credits/maxwell.gif"

const CreditPage = () => {        
    const [mode, setmode] = useState('mode retro');
    const isPixelated = mode === "mode true retro";

    const [konamiCodeActivate, setKonamiCodeActivate] = useState(false);

    const konamiSequence = [
        "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight",
        "ArrowLeft", "ArrowRight", "b", "a"
    ];

    let userInput = [];

    useEffect(() => {
        const keyPress = (event) => {
            userInput.push(event.key);

            if (userInput.length > konamiSequence.length) {
                userInput.shift();
            }

            if (userInput.join('') === konamiSequence.join('')) {
                setKonamiCodeActivate(true);

                setTimeout(() => {
                    setKonamiCodeActivate(false)
                },3000);
            }
        };
        
        window.addEventListener("keydown", keyPress);

        return () => {
            window.removeEventListener("keydown", keyPress);
        };
    }, [userInput])

    const members = [
        {
            name: "Archi",
            image: archiImage,  
            role: "défi national / design / gestion globale"
        },
        {
            name: "Cerzen",
            image: cerzenImage,
            role: "page de credit / recherches / jingle"
        },
        {
            name: "Colibry",
            image: colibryImage,
            role: "présent"
        },
        {
            name: "Cyrers",
            image: cyrersImage,
            role: "cookie cauchemard"
        },
        {
            name: "DryloXx",
            image: dryloxxImage,
            role: "gestion globale / defis national"
        },
        {
            name: "Fyne",
            image: fyneImage,
            role: "recherches / défi national"
        },
        {
            name: "Hypo",
            image: hypoImage,
            role: "gametcha / défi national"
        },
        {
            name: "Kazeno",
            image: kazenoImage,
            role: "page de crédit / recherches / jingle"
        },
        {
            name: "Ombrustou",
            image: ombruImage,
            role: "cookie cauchemard"
        },
        {
            name: "Zeph",
            image: zephImage,
            role: "recherches"
        },
    ];


    return( 
        <div className={`page-credit ${isPixelated ? "pixelated-container" : ""}`}>
            <SideBarMenu setMode={setmode}/>            
            <h1>Page de crédit</h1>
            {konamiCodeActivate && (
                <div className="konami-image">
                    <img src={konami} alt="maxwell"/>
                </div>
            )}
            <div className={`content ${isPixelated ? "pixelated" : ""}`}>
                <div className="credit-grid">
                    {members.map((member, index) => (
                        <Credit
                            key={index}
                            name={member.name}
                            image={member.image}
                            role={member.role}
                        />
                    ))}
                </div>
            </div>   
        </div>     
    )
}

export default CreditPage;