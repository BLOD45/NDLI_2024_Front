import React from "react";
import Credit from "../../components/CreditPage/PersonComp";
import "./CreditsPage.css"

const CreditPage = () => {
    const members = [
        {
            name: "Archi",
            image: "../../assets/images/PP/archi.png",
            role: "tmp"
        },
        {
            name: "Cerzen",
            image: "../../assets/images/pp/cerzen.png",
            role: "tmp"
        },
        {
            name: "Colibry",
            image: "../../assets/images/pp/colibry.png",
            role: "tmp"
        },
        {
            name: "Cyrers",
            image: "../../assets/images/pp/cyrers.png",
            role: "tmp"
        },
        {
            name: "DryloXx",
            image: "../../assets/images/pp/dryloxx.png",
            role: "tmp"
        },
        {
            name: "Fyne",
            image: "../../assets/images/pp/fyne.png",
            role: "tmp"
        },
        {
            name: "Hypo",
            image: "../../assets/images/pp/hypo.png",
            role: "tmp"
        },
        {
            name: "Kazeno",
            image: "../../assets/images/pp/kazeno.png",
            role: "tmp"
        },
        {
            name: "Ombrustou",
            image: "../../assets/images/pp/ombru.png",
            role: "tmp"
        },
        {
            name: "Zeph",
            image: "../../assets/images/pp/zeph.png",
            role: "tmp"
        },
    ];

    return( 
        <div className="page-credit">
            <h1> Page de crédit </h1>
            <div className="credit-grid">
                {members.map((member, index) => (
                    <Credit
                        key={index}
                        name={member.name}
                        image={member.image}
                        role={member.role}
                    />
                ))}
            </div>
        </div>
    )
}

export default CreditPage;