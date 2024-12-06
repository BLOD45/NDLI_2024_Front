import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Line, Image, Rect } from "react-konva";


const fishnetingCaptcha: React.FC = () => {
  const maxScroll = 400;
  const [virtualScrollY, setVirtualScrollY] = useState(maxScroll); 
  const [isSuccess, setIsSuccess] = useState(false); // Validation du CAPTCHA
  const [speed, setspeed] = useState(2);

  const fishnetImage = React.useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const canvaContainer = useRef<HTMLDivElement | null >(null);

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
      console.log(fishnetImage.current?.width);
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



  const fishnetWidth = 100;

  return (
    <div
      style={{height: "100vh",width:"100vw", overflow: "hidden" }}
      onWheel={handleWheel} 
    >
        {/* Header */}
        <div
            style={{ height: "10vh", width: "100vw", textAlign: "center"}}
        >
            <h3>🎣 Remonte les déchets !</h3>
        </div>

        {/* Body */}
        <div
            style={{ height: "80vh", width: "100vw"}}
        >
            {/* Div pour canva */}
            <div
                ref={canvaContainer}
                style={{ width:"30%", height:"100%", margin:"auto"}}
            >
                {!isSuccess ? (
                        <>
                        {/* Canevas pour le jeu */}
                            <Stage 
                             width={canvaContainer.current?.clientWidth || 0} 
                             height={canvaContainer.current?.clientHeight || 0}>
                            <Layer>

                                <Rect
                                x={0}
                                y={0}
                                width={canvaContainer.current?.clientWidth || 0}
                                height={canvaContainer.current?.clientHeight || 0}
                                fill="blue"
                                />

                                <Rect
                                x={0}
                                y={0}
                                width={canvaContainer.current?.clientWidth || 0 }
                                height={(canvaContainer.current?.clientHeight || 0 )/ 3.5}
                                fill="rgba(194, 178, 128, 1)"
                                />

                            {/* Ligne de pêche */}
                            <Line
                                points={[(canvaContainer.current?.clientWidth || 0 )/ 2,
                                         0, 
                                         (canvaContainer.current?.clientWidth || 0 )/ 2,
                                         virtualScrollY
                                        ]} 
                                stroke="black"
                                strokeWidth={2}
                            />

                            {/* Filet attaché au fil */}
                            {imageLoaded && (
                                <Image
                                
                                width={fishnetWidth}
                                height={100}
                                x={(canvaContainer.current?.clientWidth || 0 )/ 2 - (( fishnetWidth || 0 ) / 2)} // Décalage de la moitié de la largeur de l'image
                                y={virtualScrollY - 10}
                                
                                image={fishnetImage.current || undefined}
                                onClick={() => (window.location.href = "/")}
                                />
                            )}
                            </Layer>
                        </Stage>
                        </>
                    ) : (
                        <div style={{ textAlign: "center", marginTop: "50px" }}>
                        <h2>✅ Déchets remontés avec succès ! Bien joué !</h2>
                        <h3>Tu pouvais aussi juste cliquer sur les déchets pour les ramasser!</h3>
                        </div>
                    )}
            </div>
        </div>
        
        {/* Footer */}
        <div
            style={{ height: "10vh", width: "100vw", textAlign: "center"}}
        >
            <h4>Continuez à scroller vers le haut pour remonter les déchets !</h4>
        </div>


      
    </div>
  );
};

export default fishnetingCaptcha;
