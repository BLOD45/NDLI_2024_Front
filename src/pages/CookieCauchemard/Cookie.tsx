import { useState } from 'react';
import Cookie from '../../components/CookieCauchemard/CookieComponent.tsx';
import CookieShop from '../../components/CookieCauchemard/CookieShop.tsx';
import bubblesVideo from '../../assets/videos/background/bubbles.mp4';
import './Cookie.css';

function CauchemardCookieBasicCount() {
    const [count, setCount] = useState(0);
    const [boolCookie, setBoolCookie] = useState(false);
    const [varTemp, setVarTemp] = useState(1);
    const [randomMultiplier, setRandomMultiplier] = useState(1);

    return (
        <div className="container">
            <video className="background-video" autoPlay loop muted>
                <source src={bubblesVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <CookieShop count={count} setCount={setCount} boolCookie={boolCookie} varTemp={varTemp} setVarTemp={setVarTemp} randomMultiplier={randomMultiplier} setRandomMultiplier={setRandomMultiplier}/>
            <div className="clicker-zone">
                <h1>Cauchemard Cookie</h1>
                <Cookie count={count} boolCookie={boolCookie} setCount={setCount} setBoolCookie={setBoolCookie} randomMultiplier={randomMultiplier} />
            </div>
        </div>
    );
}

export default CauchemardCookieBasicCount;