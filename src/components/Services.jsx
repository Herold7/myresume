import React from "react";
import SectionTitle from "./SectionTitle";
import Cards from "./Cards";
import Testimonials from "./Testimonials";

export default function Services() {

    return (
        <>
            <section id="services" class="services">
                <div class="container" data-aos="fade-up">
                    <SectionTitle />
                    <div class="row">
                        <Cards />
                    </div>
                </div>
            </section>
            <section id="testimonials" class="testimonials section-bg">
                <div class="container" data-aos="fade-up">
                    <SectionTitle />
                    <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div class="swiper-wrapper">
                            <Testimonials />
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </section >
        </>
    )
}