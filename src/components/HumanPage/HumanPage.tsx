import React, { useState } from "react";
import HumanImage from "../../assets/images/principal/human.png";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import texts from "../../assets/text/texts.json";


const HumanPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [popupContent, setPopupContent] = useState<React.ReactNode>(null);

    // Fonction qui récupère les textes en fonction du bouton cliqué
    const handleButtonClick = (key: string) => {
        let content: string[] = [];

        // Vérification des clés pour afficher les bons textes
        if (key === "1") {
            content = [texts["1"].homme, texts["1"].parallel];
        } else if (key === "2") {
            content = [texts["2"].homme, texts["2"].parallel];
        } else if (key === "6") {
            content = [texts["6"].ocean, texts["6"].parallel];
        }

        // Mise à jour du contenu du pop-up et affichage du pop-up
        setPopupContent(content.map((text, index) => <p key={index}>{text}</p>));
        setIsVisible(true);
    };

    return (
        <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
            {/* Colonne avec les boutons */}
            <div style={{ display: "flex", flexDirection: "column", marginRight: "20px" }}>
                <button onClick={() => handleButtonClick("1")}>1</button>
                <button onClick={() => handleButtonClick("2")}>2</button>
                <button onClick={() => handleButtonClick("6")}>6</button>
            </div>

            {/* Image principale */}
            <div>
                <img src={HumanImage} alt="Human" style={{ width: "100%" }} />
            </div>

            {/* Affichage du pop-up */}
            <InfoPopUp
                isVisible={isVisible}
                content={popupContent}
                onClose={() => setIsVisible(false)}
            />
        </div>
    );
};

export default HumanPage;