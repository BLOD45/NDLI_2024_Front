import React from 'react';
import './CookieShop.css';

interface CookieShopProps {
    count: number;
    boolCookie: boolean;
}

function CookieShop({ count, boolCookie }: CookieShopProps) {
    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="indicator">
                <p className="left-align">Count: {count}</p>
                {/* <p>Cookie: {boolCookie ? 'true' : 'false'}</p> */}
            </div>
            {/* Shop content will be added here later */}
        </div>
    );
}

export default CookieShop;