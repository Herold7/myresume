import React from "react";

export default function Cards() {

const serviceCards = [
  {
    place: "col-lg-4 col-md-6 d-flex align-items-stretch",
    className: "icon-box iconbox-blue",
    className2: "bx bxl-dribbble",
    title: "Lorem Ipsum",
    content: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    place: "col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0",
    className: "icon-box iconbox-orange",
    className2: "bx bx-file",
    title: "Sed Perspiciatis",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
  },
  {
    place: "col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0",
    className: "icon-box iconbox-pink",
    className2: "bx bx-tachometer",
    title: "Magni Dolores",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
  },
  {
    place: "col-lg-4 col-md-6 d-flex align-items-stretch mt-4",
    className: "icon-box iconbox-yellow",
    className2: "bx bx-layer",
    title: "Nemo Enim",
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
  },
  {
    place: "col-lg-4 col-md-6 d-flex align-items-stretch mt-4",
    className: "icon-box iconbox-red",
    className2: "bx bx-slideshow",
    title: "Dele Cardo",
    content: "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur",
  },
  {
    place: "col-lg-4 col-md-6 d-flex align-items-stretch mt-4",
    className: "icon-box iconbox-teal",
    className2: "bx bx-arch",
    title: "Divera Don",
    content: "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
  },
];

    return (
        <>
    {serviceCards.map((service, index) => (
    <div className={service.place} data-aos="zoom-in" data-aos-delay="100" key={index}>
            <div className={service.className} >
              <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                </svg>
                <i className={service.className2}></i>
              </div>
              <h4><a href="">{service.title}</a></h4>
              <p>{service.content}</p>
            </div>
          </div>
    ))}
            
        </>
    )
}



