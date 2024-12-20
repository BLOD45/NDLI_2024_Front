import React, { useEffect } from 'react';
import './CookieShop.css';

interface CookieShopProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    boolCookie: boolean;
    varTemp: number;
    setVarTemp: React.Dispatch<React.SetStateAction<number>>;
    randomMultiplier: number;
    setRandomMultiplier: React.Dispatch<React.SetStateAction<number>>;
}

function CookieShop({ count, setCount, varTemp, setVarTemp, randomMultiplier, setRandomMultiplier }: CookieShopProps) {

    useEffect(() => {
        const interval = setInterval(() => {
            const randomValue = Math.random() * (varTemp - 1 / varTemp) + 1 / varTemp;
            setRandomMultiplier(randomValue);
        }, 2000);

        return () => clearInterval(interval);
    }, [varTemp, setRandomMultiplier]);

    const handleButtonClick = () => {
        if (count >= varTemp ** 2) {
            setVarTemp(varTemp + 1);
            setCount(Math.round(count - varTemp ** 2));
        }
    };

    return (
        <div className="shop">
            <a href="/" className="logo" style={{ color: "white", padding: "10px" }}> Accueil </a>
            <h1>Shop</h1>
            <div className="indicator">
                <p className="left-align">Count: {count}</p>
                <p className="left-align">VarTemp: {varTemp}</p>
                <p className="left-align">Random Multiplier: {randomMultiplier.toFixed(2)}</p>
                <button onClick={handleButtonClick} disabled={count < varTemp ** 2}>
                    Increment VarTemp
                </button>
            </div>
        </div>
    );
}

export default CookieShop;