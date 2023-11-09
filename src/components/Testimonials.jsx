import React from "react";
import testimonials1 from "../assets/img/testimonials/testimonials-1";
import testimonials2 from "../assets/img/testimonials/testimonials-2";
import testimonials3 from "../assets/img/testimonials/testimonials-3";
import testimonials4 from "../assets/img/testimonials/testimonials-4";
import testimonials5 from "../assets/img/testimonials/testimonials-5";

export default function Testimonials() {

    const serviceTest = [
        {
            picture: [testimonials1],
            name: "Saul Goodman",
            position: "Ceo &amp; Founder",
            testimony: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
        },
        {
            picture: [testimonials2],
            name: "Sara Wilsson",
            position: "Designer",
            testimony: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",

        },
        {
            picture: [testimonials3],
            name: "Jena Karlis",
            position: "Store Owner",
            testimony: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",

        },
        {
            picture: [testimonials4],
            name: "Matt Brandon",
            position: "Freelancer",
            testimony: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",

        },
        {
            picture: [testimonials5],
            name: "John Larson",
            position: "Entrepreneur",
            testimony: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",

        },

    ]

    return (
        <>
            <div class="swiper-slide">
                {serviceTest.map((testimonial, index) => (
                    <div class="testimonial-item" key={index}>
                        <img src={testimonial.picture} class="testimonial-img" alt="" />
                        <h3>{testimonial.name}</h3>
                        <h4>{testimonial.position}</h4>
                        <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            {testimonial.picture}
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}