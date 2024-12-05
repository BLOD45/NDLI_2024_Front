import { useEffect, useRef } from 'react'
import marlinFish from '../../assets/lobsterForClicker.png'
import './CookieComponent.css'

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
            const maxY = clickerZone.clientHeight - button.clientHeight - 20
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

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
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