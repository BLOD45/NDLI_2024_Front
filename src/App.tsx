import React, { useState, useEffect } from "react";
import { Stage, Layer, Line, Circle } from "react-konva";

const FishingCaptcha: React.FC = () => {
  const maxScroll = 400; // Distance totale à scroller
  const [virtualScrollY, setVirtualScrollY] = useState(maxScroll); // Poisson commence en bas
  const [isSuccess, setIsSuccess] = useState(false); // Validation du CAPTCHA
  const [speed, setspeed] = useState(2);


useEffect(() => {
  const interval = setInterval(() => {
    setVirtualScrollY((prev) => {
      const newScrollY = prev + speed;
      return Math.min(newScrollY, maxScroll);
    });
  }, 50);

  return () => clearInterval(interval);
}, [isSuccess]);

useEffect(() => {
  const speedInterval = setInterval(() => {
    const speedOptions = [];
    const newSpeed = Math.random() * 4 +1; // Génère un vitesse entre 1 et 5
    setspeed(newSpeed);
  }, 2000);

  return () => clearInterval(speedInterval);
}, []);

  // Gestionnaire de la molette pour simuler le scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // Empêche le défilement réel

    setVirtualScrollY((prev) => {
      const newScrollY = prev - e.deltaY * 0.08; // Réduire pour remonter
      return Math.max(0, Math.min(newScrollY, maxScroll)); // Limiter entre 0 et maxScroll
    });
  };

  // Vérifier si le poisson est remonté au sommet
  useEffect(() => {
    if (virtualScrollY <= 0) {
      setIsSuccess(true); // Valider le CAPTCHA
    }
  }, [virtualScrollY]);

  return (
    <div
      style={{ height: "100vh", overflow: "hidden" }} // Empêche le défilement réel
      onWheel={handleWheel} // Intercepte les événements de la molette
    >
      {!isSuccess ? (
        <>
          <div style={{ height: "100px", textAlign: "center" }}>
            <h3>🎣 Faites défiler vers le haut pour remonter le poisson !</h3>
          </div>

          {/* Canevas pour le jeu */}
          <Stage width={500} height={500}>
            <Layer>
              {/* Ligne de pêche */}
              <Line
                points={[250, 0, 250, virtualScrollY]} // Ligne commence en bas et suit le poisson
                stroke="black"
                strokeWidth={2}
              />
              {/* Poisson attaché à l'hameçon */}
              <Circle
                x={250}
                y={virtualScrollY} // Le poisson suit la ligne
                radius={20}
                fill="blue"
              />
            </Layer>
          </Stage>

          <div style={{ height: "200px", textAlign: "center" }}>
            <h4>Continuez à scroller vers le haut pour remonter le poisson !</h4>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>✅ Poisson remonté avec succès ! CAPTCHA validé.</h2>
        </div>
      )}
    </div>
  );
};

export default FishingCaptcha;
