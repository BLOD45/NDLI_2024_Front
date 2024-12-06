import React, { useState } from "react";
import HumanImage from "../../assets/images/principal/human.png";
import InfoPopUp from "../InfoPopUp/InfoPopUp";
import texts from "../../assets/text/texts.json";
import blood from "../../assets/images/human/blood.png";
import bone from "../../assets/images/human/bone.png";
import heart from "../../assets/images/human/heart.png";
import stomach from "../../assets/images/human/stomach.png";

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
        <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
            {/* Colonne avec les boutons, fixée à une largeur de 150px */}
            <div style={{ display: "flex", flexDirection: "column", marginRight: "20px", width: "150px", textAlign: "center" }}>
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
