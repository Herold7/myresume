import React from "react";
import SocialLinks from "./SocialLinks";

export default function Hero() {

    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Brandon Johnson</h1>
                    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
                    
                    <SocialLinks />
                
                </div>
            </section>
        </>
    )
}