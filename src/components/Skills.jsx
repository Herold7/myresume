import React from "react";

export default function Skills() {
    const skillsCounter1 = [
        {
            name: "HTML",
            value: "100",
        },
        {
            name: "CSS",
            value: "90",
        },
        {
            name: "JavaScript",
            value: "75",
        },
    ];

    const skillsCounter2 = [
        {
            name: "PHP",
            value: "80",
        },
        {
            name: "CSS",
            value: "90",
        },
        {
            name: "JavaScript",
            value: "75",
        },
    ];


    return (
        <>
            {skillsCounter1.map((skill, index) => (
                <div className="col-lg-6" key={index}>

                    <div className="progress">
                        <span className="skill">{skill.name} <i className="val">{skill.value}%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
))}

                    {skillsCounter2.map((skill, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className="progress">
                                <span className="skill">{skill.name} <i className="val">{skill.value}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )
}