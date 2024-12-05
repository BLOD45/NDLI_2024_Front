import React, { useState, useEffect } from "react";
import { Stage, Layer, Line, Image } from "react-konva";


const fishnetingCaptcha: React.FC = () => {
  const maxScroll = 400;
  const [virtualScrollY, setVirtualScrollY] = useState(maxScroll); 
  const [isSuccess, setIsSuccess] = useState(false); // Validation du CAPTCHA
  const [speed, setspeed] = useState(2);

  const fishnetImage = React.useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = new window.Image();
  image.src = "./filet-dechet.png";


useEffect(() => {
  const interval = setInterval(() => {
    setVirtualScrollY((prev) => {
      const newScrollY = prev + speed;
      return Math.min(newScrollY, maxScroll);
    });
  }, 50);

  return () => clearInterval(interval);
}, [speed,isSuccess]);

useEffect(() => {
  const speedInterval = setInterval(() => {
    const speedOptions = [3, 5, 10, 3, 5, 10, 3, 5, 15];
    const newSpeed = speedOptions[Math.floor(Math.random() * speedOptions.length)]
    setspeed(newSpeed);
  },1000);

  return () => clearInterval(speedInterval);
}, []);



  // Gestionnaire de la molette pour simuler le scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault(); // Empêche le défilement réel

    setVirtualScrollY((prev) => {
      const newScrollY = prev - e.deltaY * 0.08; // Sensibilité du scroll
      return Math.max(0, Math.min(newScrollY, maxScroll)); // Limiter entre 0 et maxScroll
    });
  };

  useEffect(() => {
    if (virtualScrollY <= 0) {
      setIsSuccess(true); 
    }
  }, [virtualScrollY]);

  return (
    <div
      style={{ height: "100vh", overflow: "hidden" }}
      onWheel={handleWheel} 
    >
      {!isSuccess ? (
        <>
          <div style={{ height: "100px", textAlign: "center" }}>
            <h3>🎣 Remonte les déchets !</h3>
          </div>

          {/* Canevas pour le jeu */}
          <Stage width={500} height={500}>
            <Layer>
              {/* Ligne de pêche */}
              <Line
                points={[250, 0, 250, virtualScrollY]} 
                stroke="black"
                strokeWidth={2}
              />

              {/* Filet attaché au fil */}
              {imageLoaded && (
                <KonvaImage
                  x={225}
                  y={virtualScrollY}
                  width={50}
                  height={50}
                  image={fishnetImage.current || undefined}
                  onClick={() => (window.location.href = "/")}
                />
              )}
            </Layer>
          </Stage>

          <div style={{ height: "200px", textAlign: "center" }}>
            <h4>Continuez à scroller vers le haut pour remonter le poisson !</h4>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>✅ Déchets remontés avec succès ! Bien joué !</h2>
        </div>
      )}
    </div>
  );
};

export default fishnetingCaptcha;
