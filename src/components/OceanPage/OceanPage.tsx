import React, { useState } from 'react';
import texts from '../../assets/text/texts.json';
import oceanBackground from '../../assets/images/principal/test.jpg';

const OceanPage: React.FC = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState<React.ReactNode>(null);

    const handleButtonClick = (key: string) => {
        let content: string[] = []; // Utilisez la clé pour accéder au texte de l'océan
        
        if (key === "1") {
            content = [texts["1"].ocean, texts["1"].parallel];
        } else if (key === "2") {
            content = [texts["2"].ocean, texts["2"].parallel];
        } else if (key === "3") {
            content = [texts["3"].ocean, texts["3"].parallel];
        } else if (key === "4") {
            content = [texts["4"].ocean, texts["4"].parallel];
        } else if (key === "5") {
            content = [texts["5"].ocean, texts["5"].parallel];
        } else if (key === "6") {
            content = [texts["6"].ocean, texts["6"].parallel];
        }

        setPopupContent(content.map((text, index) => <p key={index}>{text}</p>));
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            {/* Div Background */}
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    backgroundImage: `url(${oceanBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* Marée */}
                <button
                    style={{
                        position: "absolute",
                        top: "7%",
                        left: "30%",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(255, 0, 0, 0.5)", // Semi-transparent red
                        border: "none",
                        cursor: "pointer"
                    }}
                    onClick={() => handleButtonClick('2')}
                >
                </button>

                {/* Acidification de l'océan */}
                <button
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "60%",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(0, 0, 255, 0.5)", // Semi-transparent blue
                        border: "none",
                        cursor: "pointer"
                    }}
                    onClick={() => handleButtonClick('1')}
                >
                </button>

                {/* Dorsales */}
                <button
                    style={{
                        position: "absolute",
                        top: "90%",
                        left: "50%",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(0, 255, 0, 0.5)", // Semi-transparent green
                        border: "none",
                        cursor: "pointer"
                    }}
                    onClick={() => handleButtonClick('3')}
                >  
                </button>

                {/* Corail */}
                <button
                    style={{
                        position: "absolute",
                        top: "68%",
                        left: "23%",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(0,0,0, 0.5)", // Semi-transparent yellow
                        border: "none",
                        cursor: "pointer"
                    }}
                    onClick={() => handleButtonClick('6')}
                >
                </button>

                {/* Plancton */}
                <button
                    style={{
                        position: "absolute",
                        top: "16%",
                        left: "64%",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(255, 255, 0, 0.5)", // Semi-transparent black
                        border: "none",
                        cursor: "pointer"
                    }}
                    onClick={() => handleButtonClick('5')}
                >
                </button>




                {/* Popup */}
                {popupVisible && (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            padding: "20px",
                            backgroundColor: "rgba(245,245,220)",
                            border: "1px solid black",
                            zIndex: 1000,
                            color: "black"
                        }}
                    >
                        <p>{popupContent}</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default OceanPage;