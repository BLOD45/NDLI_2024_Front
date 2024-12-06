import React from "react";

interface InfoPopUpProps {
    isVisible: boolean; // Controle de la visibilité du composant
    content: React.ReactNode; // Contenu du composant
    onClose: () => void; // Fonction de fermeture du composant
}

function InfoPopUp({ isVisible, content, onClose }: InfoPopUpProps) {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="info-popup">
            <div className="info-popup-content">
                {content}
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default InfoPopUp;
