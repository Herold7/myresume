import React from "react";

export default function Fact() {
    const factCounter = [
        {
            counterEnd: "232",
            text: "Happy Clients",
        },
        {
            counterEnd: "232",
            text: "Projects",
        },
        {
            counterEnd: "232",
            text: "Hours Of Support",
        },
        {
            counterEnd: "232",
            text: "Awards",
        },
    ];

    return (
        <>
            <section id="facts" className="facts">
                <div className="container" data-aos="fade-up">

                    <SectionTitle />

                    {factCounter.map((data, index) => (
                        <div className="row" key={index}>
                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-emoji-smile"></i>
                                    <span data-purecounter-start="0" data-purecounter-end={data.counterEnd} data-purecounter-duration="1" className="purecounter"></span>
                                    <p>{data.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}