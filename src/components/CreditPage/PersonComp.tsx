import React from "react";
// import 'nes.css/css/nes.min.css';
import "./PersonComp.css"

interface PersonCompProps {
    name: string; // username a afficher
    image: string; // Chemin de la pp
    role: string; //Role a afficher
}

function PersonComp({ name, image, role }: PersonCompProps) {
    return (
        <div className="is-dark person-comp nes-container is-rounded">
            <div className="profile-pic-container nes-container is-rounded">
                <img src={image}/>
            </div>
            <div className="nes-badge note">
                <span className="is-error">{role}</span>
            </div>
            <br></br>
            <br></br>
            <p className="name nes-text is-success"> &lt;{name}&gt; </p>
        </div>
    );
}

export default PersonComp;
