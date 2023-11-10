import React from "react";
import Cards from "./Cards";
import Testimonials from "./Testimonials";

export default function Services() {

    return (
        <>
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <Cards />
                    </div>
                </div>
            </section>
            
                            <Testimonials />
                    
        </>
    )
}