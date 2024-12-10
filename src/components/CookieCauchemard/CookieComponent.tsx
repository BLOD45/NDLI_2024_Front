import { useEffect, useRef, useState } from 'react';
import marlinFish from '../../assets/lobsterForClicker.png';
import helper from '../../assets/helper.png';
import './CookieComponent.css';

interface CookieProps {
    count: number;
    boolCookie: boolean;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setBoolCookie: React.Dispatch<React.SetStateAction<boolean>>;
    randomMultiplier: number;
    helpers: number;
}

function Cookie({ count, boolCookie, setCount, setBoolCookie, randomMultiplier, helpers }: CookieProps) {
    const buttonRef = useRef<HTMLImageElement>(null);
    const clickerZoneRef = useRef<HTMLDivElement>(null);
    const helperRefs = useRef<HTMLImageElement[]>([]);
    const [helperPositions, setHelperPositions] = useState<{ x: number; y: number }[]>([]);

    // Initialisation des helpers une seule fois
    useEffect(() => {
        setHelperPositions((prev) => {
            if (prev.length === helpers) return prev;
            const newHelpers = Array.from({ length: helpers - prev.length }).map(() => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
            }));
            return [...prev, ...newHelpers];
        });
    }, [helpers]);

    const handleButtonClick = () => {
        setCount((count) => Math.round(boolCookie ? count - randomMultiplier : count + randomMultiplier));
        setBoolCookie(true);

        if (clickerZoneRef.current && buttonRef.current) {
            const clickerZone = clickerZoneRef.current;
            const button = buttonRef.current;
            const maxX = clickerZone.clientWidth - button.clientWidth;
            const maxY = clickerZone.clientHeight - button.clientHeight - 50;

            const randomX = Math.floor(Math.random() * maxX + 20);
            const randomY = Math.floor(Math.random() * maxY - 250);
            button.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }
    };

    const updateHelpersPosition = () => {
        if (!buttonRef.current || !helperRefs.current.length || !clickerZoneRef.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        const containerRect = clickerZoneRef.current.getBoundingClientRect();

        setHelperPositions((prev) =>
            prev.map((position, index) => {
                const helper = helperRefs.current[index];
                if (!helper) return position;

                const helperCenterX = containerRect.left + position.x + helper.offsetWidth / 2;
                const helperCenterY = containerRect.top + position.y + helper.offsetHeight / 2;

                const deltaX = buttonCenterX - helperCenterX;
                const deltaY = buttonCenterY - helperCenterY;

                const newX = position.x + deltaX * 0.5;
                const newY = position.y + deltaY * 0.5 - 180;

                const maxX = containerRect.width - helper.offsetWidth;
                const maxY = containerRect.height - helper.offsetHeight;

                const constrainedX = Math.min(Math.max(newX, 0), maxX);
                const constrainedY = Math.min(Math.max(newY, -290), maxY);

                // Simule un événement pour fleeLobster
                const event = {
                    pageX: constrainedX + containerRect.left,
                    pageY: constrainedY + containerRect.top,
                };
                fleeLobster(event);

                return { x: constrainedX, y: constrainedY };
            })
        );
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setCount((count) => Math.round(boolCookie ? count + randomMultiplier : count - randomMultiplier));
            setBoolCookie(false);
        }
    };

    const fleeLobster = (event: any) => {
        var eventDoc, doc, body;

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX =
                event.clientX +
                ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
            event.pageY =
                event.clientY +
                ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                ((doc && doc.clientTop) || (body && body.clientTop) || 0);
        }

        if (clickerZoneRef.current && buttonRef.current) {
            const clickerZone = clickerZoneRef.current;
            const button = buttonRef.current;
            const match = clickerZone.innerHTML.match(/translate\(([^,]+),\s*([^)]+)\)/);
            var objectX = 400 + button.clientWidth / 2;
            var objectY = 290 + button.clientHeight / 2;

            if (match) {
                objectX = parseInt(match[1].trim(), 10) + 400 + button.clientWidth / 2;
                objectY = parseInt(match[2].trim(), 10) + 290 + button.clientHeight / 2;
            }

            // Récupérer les coordonnées de la souris
            const mouseX = event.pageX;
            const mouseY = event.pageY;

            const dist = Math.sqrt(Math.pow(mouseX - objectX, 2)) + Math.sqrt(Math.pow(mouseY - objectY, 2));
            console.log(objectX,objectY)

            if (dist < 200) {
                // Calculer le point miroir
                const mirrorX = (-0.00195 * dist + 2) * objectX - mouseX;
                const mirrorY = (-0.005 * dist + 2) * objectY - mouseY;

                // Contraindre le point miroir aux limites
                const maxX = clickerZone.clientWidth - button.clientWidth + 20;
                const maxY = clickerZone.clientHeight - button.clientHeight - 200;

                const constrainedX = Math.min(Math.max(mirrorX, 20), maxX);
                const constrainedY = Math.min(Math.max(mirrorY, -300), maxY);

                button.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(updateHelpersPosition, 1000); // Mise à jour toutes les 1 seconde
        document.addEventListener('click', handleClickOutside);
        document.onmousemove = fleeLobster;

        return () => {
            document.removeEventListener('click', handleClickOutside);
            clearInterval(interval);
        };
    }, [boolCookie, helpers]);

    return (
        <div className="clicker-zone-click" ref={clickerZoneRef}>
            <img
                ref={buttonRef}
                src={marlinFish}
                alt="Marlin Fish"
                onClick={handleButtonClick}
                className="clicker-image"
            />
            {helperPositions.map((position, index) => (
                <img
                    key={index}
                    ref={(el) => (helperRefs.current[index] = el!)} // Enregistre la référence
                    src={helper}
                    alt={`Helper ${index}`}
                    className="helper-image"
                    style={{
                        height: '20px',
                        width: '20px',
                        position: 'absolute',
                        transform: `translate(${position.x}px, ${position.y}px)`,
                    }}
                />
            ))}
        </div>
    );
}

export default Cookie;
