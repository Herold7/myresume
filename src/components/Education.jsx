import React from "react";

export default function Education() {

  const resumEduc = [
    {
      degree: "Master of Fine Arts &amp; Graphic Design",
      date: "2015 - 2016",
      location: "Rochester Institute of Technology, Rochester, NY",
      description: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },
    {
      degree: "Bachelor of Fine Arts &amp; Graphic Design",
      date: "2010 - 2014",
      location: "Rochester Institute of Technology, Rochester, NY",
      description: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
    },

  ];

  return (
    <>
      <h3 className="resume-title">Education</h3>
      {resumEduc.map((education, index) => (
        <div key={index}>
          <div className="resume-item" >
            <h4>{education.degree}</h4>
            <h5>{education.date}</h5>
            <p><em>{education.location}</em></p>
            <p>{education.description}</p>
          </div>
        </div>
      ))};

    </>
  )
}