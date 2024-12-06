import React, { useState } from 'react';

const OceanPage: React.FC = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    const handleButtonClick = (content: string) => {
        setPopupContent(content);
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
                    backgroundImage: "url('/src/assets/images/principal/test.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* Visible Buttons */}
                <button
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "30%",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(255, 0, 0, 0.5)", // Semi-transparent red
                        border: "none",
                        cursor: "pointer"
                    }}
                    onClick={() => handleButtonClick('Popup Content 1')}
                >
                    Button 1
                </button>
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
                    onClick={() => handleButtonClick('Popup Content 2')}
                >
                    Button 2
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
                            backgroundColor: "white",
                            border: "1px solid black",
                            zIndex: 1000
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