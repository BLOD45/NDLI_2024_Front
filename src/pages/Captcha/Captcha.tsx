import React from 'react'
import { Link } from 'react-router-dom'

const Captcha: React.FC = () => {
    return (
        <div>
            <h1>Captcha</h1>
            <button>
                <Link to="/choix">Vers Crédit ou CookieCauchemar</Link>
            </button>
        </div>
    )
}

export default Captcha
