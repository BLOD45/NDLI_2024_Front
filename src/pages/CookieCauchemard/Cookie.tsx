import { useState } from 'react';
import Cookie from '../../components/CookieCauchemard/CookieComponent.tsx';
import CookieShop from '../../components/CookieCauchemard/CookieShop.tsx';
import bubblesVideo from '../../assets/videos/background/bubbles.mp4';
import './Cookie.css';

function CauchemardCookieBasicCount() {
    const [count, setCount] = useState(0);
    const [boolCookie, setBoolCookie] = useState(false);

    return (
        <div className="container">
            <video className="background-video" autoPlay loop muted>
                <source src={bubblesVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <CookieShop count={count} boolCookie={boolCookie} />
            <div className="clicker-zone">
                <h1>Cauchemard Cookie</h1>
                <Cookie count={count} boolCookie={boolCookie} setCount={setCount} setBoolCookie={setBoolCookie} />
            </div>
        </div>
    );
}

export default CauchemardCookieBasicCount;