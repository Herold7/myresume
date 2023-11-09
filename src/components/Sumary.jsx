import React from "react";

export default function Sumary() {

    const resumSumary = [
        {
            name: "Brandon Johnson",
            description: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
            address: "Portland par 127,Orlando, FL",
            tel: "(123) 456-7891",
            mail: "alice.barkley@example.com",

        }
    ]

    return (
        <>
            {resumSumary.map((details) => (
                <div className="resume-item pb-0">
                    <h4>{details.name}</h4>
                    <p><em>{details.description}.</em></p>
                    <ul>
                        <li>{details.address}</li>
                        <li>{details.tel}</li>
                        <li>{details.mail}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}