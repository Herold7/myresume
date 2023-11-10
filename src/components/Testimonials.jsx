import React from "react";
import testimonials1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonials2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonials3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonials4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonials5 from "../assets/img/testimonials/testimonials-5.jpg";

export default function Testimonials() {
    const picture = [testimonials1, testimonials2, testimonials3, testimonials4, testimonials5]

    const serviceTest = [
        {
            name: "Saul Goodman",
            position: "Ceo &amp; Founder",
            testimony: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
        },
        {
            name: "Sara Wilsson",
            position: "Designer",
            testimony: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",

        },
        {
            name: "Jena Karlis",
            position: "Store Owner",
            testimony: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",

        },
        {
            name: "Matt Brandon",
            position: "Freelancer",
            testimony: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",

        },
        {
            name: "John Larson",
            position: "Entrepreneur",
            testimony: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",

        },

    ]

    return (
        
            <section id="testimonials" className="testimonials section-bg">
                <div className="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Testimonials</h2>
                    </div>
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                {serviceTest.map((testimonial, index) => (
                                    <div className="testimonial-item" key={index}>
                                        <img src={picture[index]} className="testimonial-img" alt="" />
                                        <h3>{testimonial.name}</h3>
                                        <h4>{testimonial.position}</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            {testimonial.testimony}
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section >
        
    )
}