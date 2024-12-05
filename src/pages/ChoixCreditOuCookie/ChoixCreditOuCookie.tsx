import React from 'react'
import { Link } from 'react-router-dom'

const ChoixPage: React.FC = () => {
    return (
        <div>
            <h1>Choix Page</h1>
            <button>
                <Link to="/credits">Vers Crédits</Link>
            </button>
            <button>
                <Link to="/cookie">Vers CookieCauchemar</Link>
            </button>
        </div>
    )
}

export default ChoixPage
