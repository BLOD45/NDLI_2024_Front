import { useState } from 'react'
import './Cookie.css'

function CauchemardCookieBasicCount() {
    const [boolCookie, setBoolCookie] = useState(false)
    const [countCountCookie, setCountCountCookie] = useState(0)

    return(
        <>
            <div>
                <h1>Cauchemard Cookie</h1>
                <div className="card">
                    <button onClick={() => setCountCountCookie((countCountCookie) => countCountCookie + 1)}>
                        count is {countCountCookie}
                    </button>
                    <button onClick={() => setBoolCookie((boolCookie) => !boolCookie)}>
                        {boolCookie ? 'Cookie is true' : 'Cookie is false'}
                    </button>
                    <p>
                        Edit <code>src/CookieCauchemard/Cookie.tsx</code> and save to test HMR
                    </p>
                </div>
            </div>
        </>
    )
}
export default CauchemardCookieBasicCount