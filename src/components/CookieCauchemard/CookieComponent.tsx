import { useEffect, useRef } from 'react'
import marlinFish from '../../assets/lobsterForClicker.png'
import './CookieComponent.css'
import { Mouse } from '@mui/icons-material'
import { Button } from '@mui/material'

interface CookieProps {
    count: number
    boolCookie: boolean
    setCount: React.Dispatch<React.SetStateAction<number>>
    setBoolCookie: React.Dispatch<React.SetStateAction<boolean>>
}

function Cookie({ count, boolCookie, setCount, setBoolCookie }: CookieProps) {
    const buttonRef = useRef<HTMLImageElement>(null)
    const clickerZoneRef = useRef<HTMLDivElement>(null)

    const handleButtonClick = () => {
        setCount((count) => (boolCookie ? count - 1 : count + 1))
        setBoolCookie(true)

        if (clickerZoneRef.current && buttonRef.current) {
            const clickerZone = clickerZoneRef.current
            const button = buttonRef.current
            const maxX = clickerZone.clientWidth - button.clientWidth 
            const maxY = clickerZone.clientHeight - button.clientHeight - 50
            const randomX = Math.floor(Math.random() * maxX + 20)
            const randomY = Math.floor(Math.random() * maxY - 250)
            button.style.transform = `translate(${randomX}px, ${randomY}px)`
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setCount((count) => (boolCookie ? count + 1 : count - 1));
            setBoolCookie(false)
        }
    };

    const fleeLobster = (event)=>{

        var eventDoc, doc, body;

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        if(clickerZoneRef.current && buttonRef.current){              
              const match = clickerZoneRef.current?.innerHTML.match(/translate\(([^,]+),\s*([^)]+)\)/);
              var objectX = 0;
              var objectY = 0;
              
              if (match) {
                objectX = parseInt(match[1].trim(), 10) + 400;
                objectY = parseInt(match[2].trim(), 10) + 290;
              } 

            // Récupérer les coordonnées de la souris
            const mouseX = event.pageX;
            const mouseY = event.pageY;
              
            if(Math.sqrt(Math.pow(objectX - mouseX,2)) + Math.sqrt(Math.pow(objectY - mouseY,2)) < 100){
                // Calculer le point miroir
            const mirrorX = 2 * objectX - mouseX;
            const mirrorY = 2 * objectY - mouseY;
            console.log(objectX,objectY)
            console.log(mouseX,mouseY)
            
            // Contraindre le point miroir aux limites
            const clickerZone = clickerZoneRef.current;
            const button = buttonRef.current;
            const maxX = clickerZone.clientWidth - button.clientWidth;
            const maxY = clickerZone.clientHeight - button.clientHeight - 50;
            
            const constrainedX = Math.min(Math.max(mirrorX, 20), maxX);
            const constrainedY = Math.min(Math.max(mirrorY, -250), maxY);
            
            console.log(constrainedX,constrainedY)
            button.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`
            }
              
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        document.onmousemove = fleeLobster;
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [boolCookie]);

    return (
        <div className="clicker-zone-click" ref={clickerZoneRef}>
            <img
                ref={buttonRef}
                src={marlinFish}
                alt="Marlin Fish"
                onClick={handleButtonClick}
                className="clicker-image"
            />
        </div>
    )
}

export default Cookie