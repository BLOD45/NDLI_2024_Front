import React, { useState } from "react";
import HumanImage from "../../assets/images/principal/human.png";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import texts from "../../assets/text/texts.json";
import blood from "../../assets/images/human/blood.png";
import bone from "../../assets/images/human/bone.png";
import heart from "../../assets/images/human/heart.png";
import stomach from "../../assets/images/human/stomach.png";
import "./HumanPage.css";

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
            content = [texts["3"].homme, texts["3"].parallel];
        } else if (key === "4") {
            content = [texts["4"].homme, texts["4"].parallel];
        }

        // Mise à jour du contenu du pop-up et affichage du pop-up
        setPopupContent(content.map((text, index) => <p key={index}>{text}</p>));
        setIsVisible(true);
    };

    return (
        <div className="human-page">
            {/* Colonne avec les boutons */}
            <div className="buttons-column">
                <button onClick={() => handleButtonClick("1")}>
                    <img src={stomach} alt="stomach" style={{ width: "50px", height: "50px" }} />
                </button>
                <button onClick={() => handleButtonClick("2")}>
                    <img src={heart} alt="heart" style={{ width: "50px", height: "50px" }} />
                </button>
                <button onClick={() => handleButtonClick("3")}>
                    <img src={bone} alt="bone" style={{ width: "50px", height: "50px" }} />
                </button>
                <button onClick={() => handleButtonClick("4")}>
                    <img src={blood} alt="blood" style={{ width: "50px", height: "50px" }} />
                </button>
            </div>

            {/* Colonne de l'image */}
            <div className="image-column">
                <img src={HumanImage} alt="Human" />
            </div>

            {/* Colonne du texte */}
            <div className="popup-column">
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
