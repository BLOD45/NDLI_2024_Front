import { useState } from 'react';

function Cookie() {
    const [boolCookie, setBoolCookie] = useState(false);
    const [countCountCookie, setCountCountCookie] = useState(0);

    return (
        <div className="card">
            <button onClick={() => setCountCountCookie((countCountCookie) => countCountCookie + 1)}>
                count is {countCountCookie}
            </button>
            <button onClick={() => setBoolCookie((boolCookie) => !boolCookie)}>
                {boolCookie ? 'Cookie is true' : 'Cookie is false'}
            </button>
            <p>
                Edit <code>src/CookieCauchemard/CookieComponent.tsx</code> and save to test HMR
            </p>
        </div>
    );
}

export default Cookie;