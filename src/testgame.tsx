import React, { useState, useEffect } from "react";
import { Stage, Layer, Line, Image, Rect } from "react-konva";


const fishnetingCaptcha: React.FC = () => {
  const maxScroll = 400;
  const [virtualScrollY, setVirtualScrollY] = useState(maxScroll); 
  const [isSuccess, setIsSuccess] = useState(false); // Validation du CAPTCHA
  const [speed, setspeed] = useState(2);

  const fishnetImage = React.useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Chargement de l'image du filet
  useEffect(() => {
    const img = new window.Image();
    img.src = "/src/assets/images/game-tcha/filet-dechet.png"; // Chemin relatif à partir du répertoire public

    img.onload = () => {
      fishnetImage.current = img;
      setImageLoaded(true);
    };
  }, []);

  // Redescente du filet automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setVirtualScrollY((prev) => {
        const newScrollY = prev + speed;
        return Math.min(newScrollY, maxScroll);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [speed,isSuccess]);

  // changement auto de la vitesse du filet
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
    
    setVirtualScrollY((prev) => {
      const newScrollY = prev - e.deltaY * 0.08; // Sensibilité du scroll
      return Math.max(-20, Math.min(newScrollY, maxScroll)); // Limiter entre 0 et maxScroll
    });
  };

  useEffect(() => {
    if (virtualScrollY + 20 <= 0) {
      setIsSuccess(true); 
    }
  }, [virtualScrollY]);

  return (
    <div
      style={{height: "100vh",width:"100vw", overflow: "hidden" }}
      onWheel={handleWheel} 
    >
      {!isSuccess ? (
        <>
          <div style={{ height: "100px", textAlign: "center" }}>
            <h3>🎣 Remonte les déchets !</h3>
          </div>

          {/* Canevas pour le jeu */}
            <Stage width={window.innerWidth * 0.8} height={500}>
            <Layer>

                <Rect
                x={0}
                y={0}
                width={window.innerWidth * 0.3}
                height={500}
                fill="blue"
                />

                <Rect
                x={0}
                y={0}
                width={window.innerWidth * 0.3}
                height={160}
                fill="rgba(194, 178, 128, 1)"
                />

              {/* Ligne de pêche */}
              <Line
                points={[250, 0, 250, virtualScrollY]} 
                stroke="black"
                strokeWidth={2}
              />

              {/* Filet attaché au fil */}
              {imageLoaded && (
                <Image
                  x={window.innerWidth * 0.3 - (window.innerWidth * 0.3 / 2) }
                  y={virtualScrollY- 10}
                  width={100}
                  height={100}
                  image={fishnetImage.current || undefined}
                  onClick={() => (window.location.href = "/")}
                />
              )}
            </Layer>
          </Stage>

          <div style={{ height: "200px", textAlign: "center" }}>
            <h4>Continuez à scroller vers le haut pour remonter les déchets !</h4>
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
