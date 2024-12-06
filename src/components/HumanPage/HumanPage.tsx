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
        } else if (key === "3") {
            content = [texts["3"].ocean, texts["3"].parallel];
        } else if (key === "4") {
            content = [texts["4"].ocean, texts["4"].parallel];
        }

        // Mise à jour du contenu du pop-up et affichage du pop-up
        setPopupContent(content.map((text, index) => <p key={index}>{text}</p>));
        setIsVisible(true);
    };

    return (
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
            {/* Colonne avec les boutons, fixée à une largeur de 150px */}
            <div style={{ display: "flex", flexDirection: "column", marginRight: "20px", width: "150px", textAlign: "center" }}>
                <button onClick={() => handleButtonClick("1")}>1</button>
                <button onClick={() => handleButtonClick("2")}>2</button>
                <button onClick={() => handleButtonClick("3")}>3</button>
                <button onClick={() => handleButtonClick("4")}>4</button>
            </div>

            {/* Image principale, centrée et fixée à une taille de 400px */}
            <div style={{ width: "400px", textAlign: "center" }}>
                <img src={HumanImage} alt="Human" style={{ width: "100%", height: "auto" }} />
            </div>

            {/* Colonne du pop-up, avec un max-width pour éviter que le texte déborde */}
            <div style={{ width: "300px", marginLeft: "20px" }}>
                <InfoPopUp
                    isVisible={isVisible}
                    content={popupContent}
                    onClose={() => setIsVisible(false)}
                />
            </div>
        </div>
    );
};

export default HumanPage;
