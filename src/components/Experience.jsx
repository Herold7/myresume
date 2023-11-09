import React from "react";

export default function Experience() {

    const resumExp = [
        {
            position: "Senior graphic design specialist",
            date: "2019 - Present",
            location: "Experion, New York, NY",
            description: "QLead in the design, development, and implementation of the graphic, layout, and production communication materials. Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design. Oversee the efficient use of production project budgets ranging from $2,000 - $25,000ui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.",
        },
        {
            position: "Graphic design specialist",
            date: "2017 - 2018",
            location: "Stepping Stone Advertising, New York, NY",
            description: "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).Managed up to 5 projects or tasks at a given time while under pressure, Recommended and consulted with clients on the most appropriate graphic design. Created 4+ design presentations and proposals a month for clients and account managers.",
        },

    ];

    return (
        <>
            <div>
                <h3 className="resume-title">Professional Experience</h3>
                {resumExp.map((experience, index) => (
                    <div class="resume-item" key={index}>
                        <h4>{experience.position}</h4>
                        <h5>{experience.date}</h5>
                        <p><em>{experience.location}</em></p>
                        <ul>
                            <li>{experience.description}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}