import { useState } from 'react'
import Cookie from '../../components/CookieCauchemard/CookieComponent.tsx'
import CookieShop from '../../components/CookieCauchemard/CookieShop.tsx'
import './Cookie.css'

function CauchemardCookieBasicCount() {
    const [count, setCount] = useState(0)
    const [boolCookie, setBoolCookie] = useState(false)

    return (
        <div className="container">
            <CookieShop count={count} boolCookie={boolCookie} />
            <div className="clicker-zone">
                <h1>Cauchemard Cookie</h1>
                <Cookie count={count} boolCookie={boolCookie} setCount={setCount} setBoolCookie={setBoolCookie} />
            </div>
        </div>
    )
}

export default CauchemardCookieBasicCount