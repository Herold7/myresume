import React from "react";

export default function Fact() {
    const factCounter = [
        {
            counterEnd: "232",
            text: "Happy Clients",
            className: "bi bi-emoji-smile",
        },
        {
            counterEnd: "521",
            text: "Projects",
            className: "bi bi-journal-richtext",
        },
        {
            counterEnd: "1463",
            text: "Hours Of Support",
            className: "bi bi-headset",
        },
        {
            counterEnd: "25",
            text: "Awards",
            className: "bi bi-award",
        },
    ];

    return (
        <>
            <section id="facts" className="facts">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Facts</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    {factCounter.map((data, index) => (
                        <div className="row" key={index}>
                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className={data.className}></i>
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