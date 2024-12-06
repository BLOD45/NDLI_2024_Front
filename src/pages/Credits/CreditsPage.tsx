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
            image: "../../assets/images/PP/cerzen.png",
            role: "tmp"
        },
        {
            name: "Colibry",
            image: "../../assets/images/PP/colibry.png",
            role: "tmp"
        },
        {
            name: "Cyrers",
            image: "../../assets/images/PP/cyrers.png",
            role: "tmp"
        },
        {
            name: "DryloXx",
            image: "../../assets/images/PP/dryloxx.png",
            role: "tmp"
        },
        {
            name: "Fyne",
            image: "../../assets/images/PP/fyne.png",
            role: "tmp"
        },
        {
            name: "Hypo",
            image: "../../assets/images/PP/hypo.png",
            role: "tmp"
        },
        {
            name: "Kazeno",
            image: "../../assets/images/PP/kazeno.png",
            role: "tmp"
        },
        {
            name: "Ombrustou",
            image: "../../assets/images/PP/ombru.png",
            role: "tmp"
        },
        {
            name: "Zeph",
            image: "../../assets/images/PP/zeph.png",
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