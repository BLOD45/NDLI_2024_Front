import React from "react";
import Credit from "../../components/CreditPage/PersonComp";
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

const CreditPage = () => {
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
        <div className="page-credit">
            <span className="nes-text is-disabled">
                <h1>Page de crédit</h1>
            </span>
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
    )
}

export default CreditPage;