import React from 'react';

interface CookieShopProps {
    count: number;
    boolCookie: boolean;
}

function CookieShop({ count, boolCookie }: CookieShopProps) {
    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="indicator">
                <p>Count: {count}</p>
                <p>Cookie: {boolCookie ? 'true' : 'false'}</p>
            </div>
            {/* Shop content will be added here later */}
        </div>
    );
}

export default CookieShop;